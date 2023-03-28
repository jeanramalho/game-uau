import {Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"
import Card from "../Card"


export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Ranking Liderança</Text>
        <Card pontos={100} participante={"Jean Ramalho"}/>
        <Card pontos={90} participante={"Victor Silva"}/>
        <Card pontos={80} participante={"Carol Deó"}/>
      </View>
    )
  }
}

export default index