import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"

export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
                style={styles.inpu}
                placeholder= "Ex. 1.75"
                keyboardType="numeric"
                />
      </View>
    )
  }
}

export default index