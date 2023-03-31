import { Text, View } from 'react-native'
import React, { Component } from 'react'
import  Routes  from '../../Routes'
import styles from './style'


export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Routes />        
      </View>
    )
  }
}

export default index