import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import TodoItem from './todo-item'
import { TodoStore, getFilteredTodos, useStore } from '../store/store'

const TodoList = () => {
  const { visibilityFilter } = useStore(TodoStore)
  return (
    <View className='todo-list'>
      {getFilteredTodos(visibilityFilter).map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </View>
  )
}

export default TodoList
