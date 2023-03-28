import {Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"
import Card from "../Card"


export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Card />
      </View>
    )
  }
}

export default index