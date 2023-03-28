import {Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"


export class index extends Component {
  render() {
    return (
           
      <View style={styles.container}>
        <Text style={styles.participante}>Nome do Participante</Text>
        <View>
            <Text>100</Text>
            <Text>pts</Text>
        </View>                  
       
      </View>
    )
  }
}

export default index