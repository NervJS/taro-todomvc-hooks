import Taro from '@tarojs/taro'
import { View, Label, Button, CheckboxGroup, Checkbox, Text } from '@tarojs/components'
import classnames from 'classnames'
// import TodoTextInput from './todo-text-input'
import { deleteTodo, completeTodo } from '../store/store'
import './todo-item.scss'

function TodoItem ({ todo }) {
  return (
    <View className={classnames({ completed: todo.completed })}>
      <View className='view'>
        <CheckboxGroup onChange={() => completeTodo(todo.id)}>
          <Label className='checkbox-label'>
            <Checkbox className='checkbox' checked={todo.completed} />
            <Text style={{ color: '#4d4d4d' }}>{todo.text}</Text>
          </Label>
        </CheckboxGroup>
        <Button className='destroy' onClick={() => deleteTodo(todo.id)} />
      </View>
    </View>
  )
}

TodoItem.defaultProps = {
  todo: {
    completed: false
  }
}

// function TodoItem ({ todo }) {
//   const [ editing, setEditing ] = useState(false)

//   let element = null
//   if (editing) {
//     element = (
//       <TodoTextInput
//         text={todo.text}
//         editing={editing}
//         onSave={text => {
//           if (text.length === 0) {
//             deleteTodo(todo.id)
//           } else {
//             editTodo(todo.id, text)
//           }
//           setEditing(false)
//         }}
//       />
//     )
//   } else {
//     element = (
//       // <View className='view'>
//       //   <Input
//       //     className='toggle'
//       //     type='checkbox'
//       //     checked={todo.completed}
//       //     onChange={() => completeTodo(todo.id)}
//       //   />
//       //   <Label>{todo.text}</Label>
//       //   <Button className='destroy' onClick={() => deleteTodo(todo.id)} />
//       // </View>
//       <View className='view'>
//         <CheckboxGroup onChange={() => completeTodo(todo.id)}>
//           <Label className='checkbox-label'>
//             <Checkbox className='checkbox' checked={todo.completed} />
//             <Text style={{ color: '#4d4d4d' }}>{todo.text}</Text>
//           </Label>
//           <Button className='destroy' onClick={() => deleteTodo(todo.id)} />
//         </CheckboxGroup>
//       </View>
//     )
//   }

//   return (
//     <View
//       className={classnames({
//         completed: todo.completed,
//         editing
//       })}
//     >
//       {element}
//     </View>
//   )
// }

// export default class TodoItem extends Component {
//   state = {
//     editing: false
//   }

//   handleDoubleClick = () => {
//     this.setState({ editing: true })
//   }

//   handleSave = (id, text) => {
//     if (text.length === 0) {
//       deleteTodo(id)
//     } else {
//       editTodo(id, text)
//     }
//     this.setState({ editing: false })
//   }

//   render () {
//     const { todo } = this.props

//     let element
//     if (this.state.editing) {
//       element = (
//         <TodoTextInput
//           text={todo.text}
//           editing={this.state.editing}
//           onSave={text => this.handleSave(todo.id, text)}
//         />
//       )
//     } else {
//       element = (
//         <div className='view'>
//           <input
//             className='toggle'
//             type='checkbox'
//             checked={todo.completed}
//             onChange={() => completeTodo(todo.id)}
//           />
//           <label onDoubleClick={this.handleDoubleClick}>{todo.text}</label>
//           <button className='destroy' onClick={() => deleteTodo(todo.id)} />
//         </div>
//       )
//     }

//     return (
//       <li
//         className={classnames({
//           completed: todo.completed,
//           editing: this.state.editing
//         })}
//       >
//         {element}
//       </li>
//     )
//   }
// }

export default TodoItem
