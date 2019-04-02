import Taro from '@tarojs/taro'
import { Text } from '@tarojs/components'
import classnames from 'classnames'
import { setVisibilityFilter, useStore, TodoStore } from '../store/store'
import './link.scss'

function FilterLink ({ filter }) {
  const { visibilityFilter } = useStore(TodoStore)

  return (
    <Text
      className={classnames({ selected: filter === visibilityFilter, 'filters-link': true })}
      style={{ cursor: 'pointer' }}
      onClick={() => setVisibilityFilter(filter)}
    >
      {filter}
    </Text>
  )
}

export default FilterLink
