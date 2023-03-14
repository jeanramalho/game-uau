import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../Header/'
import Input from '../Input/'


export class index extends Component {
  render() {
    return (
      <View>
        <Header/>
        <Input />
      </View>
    )
  }
}

export default index