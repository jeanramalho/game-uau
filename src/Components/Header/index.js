import { Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"

export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>Game UAU</Text>
        </View>
      </View>
    )
  }
}

export default index