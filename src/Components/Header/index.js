import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"

export class index extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.header}>Game UAU</Text>
      </View>
    )
  }
}

export default index