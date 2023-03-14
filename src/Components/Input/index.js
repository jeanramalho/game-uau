import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"

export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput
                style={styles.input}
                placeholder= "Nome Completo"
                />
      </View>
    )
  }
}

export default index