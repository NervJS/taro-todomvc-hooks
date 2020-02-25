import React, { Component } from 'react'
import './app.scss'
// import '@tarojs/components/dist/taro-components/taro-components'
// import { defineCustomElements, applyPolyfills } from '@tarojs/components/dist/loader'

// applyPolyfills().then(() => {
//     defineCustomElements(window)
// })

class App2 extends Component {
  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return this.props.children
  }
}

export default App2

// Taro.render(<App />, document.getElementById('app'))
