import {Text, View } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"
import Card from "../Card"


const Ranking => ({tipo}) => {
 
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Ranking Liderança</Text>
        <Card pontos={100} participante={"Jean Ramalho"}/>
        <Card pontos={90} participante={"Victor Silva"}/>
        <Card pontos={80} participante={"Carol Deó"}/>
      </View>
    )
  
}

export default index