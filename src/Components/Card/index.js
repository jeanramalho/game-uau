import {Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"


export class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text styles={styles.title}> Ranking Liderança</Text>
        <View>
            <Text>Nome do Participante</Text>
            <View>
                <Text>100</Text>
                <Text>pts</Text>
            </View>
            
        </View>
      </View>
    )
  }
}

export default index