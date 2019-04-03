import Taro, { useState } from '@tarojs/taro'
import { View, Label, Text } from '@tarojs/components'
import classnames from 'classnames'
import TodoTextInput from './todo-text-input'
import { deleteTodo, completeTodo, editTodo } from '../store/store'
import './todo-item.scss'

function TodoItem ({ todo, isLast }) {
  const [ lastClickTime, setClickTime ] = useState(0)
  const [ editing, setEditing ] = useState(false)
  return (
    <View className={classnames({ li: true, 'last-child': isLast, [isLast]: true })}>
      <View className={classnames({ completed: todo.completed, editing })}>
        {
          editing
            ? (
              <View className='edit'>
                <TodoTextInput
                  text={todo.text}
                  editing={editing}
                  onSave={text => {
                    if (text.length === 0) {
                      deleteTodo(todo.id)
                    } else {
                      editTodo(todo.id, text)
                    }
                    setEditing(false)
                  }}
                />
              </View>
            )
            : (
              <View className='toggle'>
                <Label
                  className={classnames({ label: true, checked: todo.completed })}
                  onClick={() => completeTodo(todo.id)}
                >
                </Label>
                <Text
                  className='text'
                  onClick={e => {
                    const currentTime = e.timeStamp
                    const gap = currentTime - lastClickTime
                    if (gap > 0 && gap < 300) { // double click
                      setEditing(true)
                    }
                    setClickTime(currentTime)
                  }}
                >
                  {todo.text}
                </Text>
                <Text className='destroy' onClick={() => deleteTodo(todo.id)} />
              </View>
            )
        }
      </View>
    </View>
  )
}

TodoItem.defaultProps = {
  todo: {
    completed: false,
    isLast: false
  }
}

export default TodoItem
