import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../../Components/Header'
import styles from './style'



export class CompleteRanking extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Text>Classe</Text>       
      </View>
    )
  }
}

export default CompleteRanking