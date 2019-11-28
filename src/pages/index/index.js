import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Header from '../../components/header'
import MainSection from '../../components/main-section'

class Index extends Component {
  componentDidShow () {
    console.log('didShow')
  }

  componentDidMount () {
    // console.log('didshow')
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

export default Index
