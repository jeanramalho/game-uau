import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../Header/'
import Input from '../Input/'
import Ranking from '../Ranking/'
import styles from './style'


export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Ranking tipo="lid" />
        <Ranking tipo="classe" />
      </View>
    )
  }
}

export default index