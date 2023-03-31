import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../../Components/Header'
import styles from './style'



export class CompleteRanking extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />       
      </View>
    )
  }
}

export default CompleteRanking