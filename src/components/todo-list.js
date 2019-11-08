import React from 'react'
import { View } from '@tarojs/components'
import TodoItem from './todo-item'
import { TodoStore, getFilteredTodos, useStore } from '../store/store'

const TodoList = () => {
  const { visibilityFilter } = useStore(TodoStore)
  const todos = getFilteredTodos(visibilityFilter)
  return (
    <View className='todo-list'>
      {todos.map((todo, i) => <TodoItem key={todo.id} todo={todo} isLast={i === todos.length - 1} />)}
    </View>
  )
}

export default TodoList
