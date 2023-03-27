import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../Header/'
import Input from '../Input/'
import Ranking from '../Ranking/'


export class index extends Component {
  render() {
    return (
      <View>
        <Header />
        <Ranking />
      </View>
    )
  }
}

export default index