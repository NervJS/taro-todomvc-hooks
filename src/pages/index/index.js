import React, { Component } from 'react'
import { View, Button } from '@tarojs/components'
import Header from '../../components/header'
import MainSection from '../../components/main-section'

class Index extends Component {
  fuck = 'fuck'

  onFuck = () => {
    const t = this
    debugger
  }
  render () {
    return (
      <View className='container'>
        <Button onClick={this.onFuck}>fuck</Button>
        <Header />
        <MainSection />
      </View>
    )
  }
}

export default Index
