import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import TodoTextInput from './todo-text-input'
import { addTodo, completeAllTodos } from '../store/store'
import './header.scss'
import FilterLink from './link'

const FILTER_TITLES = ['All', 'Active', 'Completed']

function Header () {
  return <View className='header'>
    <View className='header-title-wrap'>
      <Text className='title'>todos</Text>
    </View>
    <View className='filters'>
      {FILTER_TITLES.map(filter => <FilterLink filter={filter} key={filter} />)}
    </View>
    <View className='textinput-wrap'>
      <Text className='textinput-wrap-icon' onClick={() => completeAllTodos()}>❯</Text>
      <View className='textinput-wrap-input'>
        <TodoTextInput
          newTodo
          onSave={text => {
            if (text.length !== 0) {
              addTodo(text)
            }
          }}
          placeholder='What needs to be done?'
        />
      </View>
    </View>
  </View>
}

export default Header
