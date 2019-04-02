import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Header from '../../components/header'
import MainSection from '../../components/main-section'

export default class Index extends Component {
  config = {
    navigationBarTitleText: 'TodoMVC'
  }

  render () {
    return (
      <View className='container'>
        <Header />
        <MainSection />
      </View>
    )
  }
}
