import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../../Components/Header'
import styles from './style'
import Card from '../../Components/Card'


const CompleteRanking = () => {
  

 
    return (
      <View style={styles.container}>
        <Header />       
        <Text style={styles.title}>Ranking Liderança</Text>
        <View style={styles.rankingContainer}>               
          <Card pontos={100} participante={"Jean Ramalho"}/>
          <Card pontos={90} participante={"Victor Silva"}/>
          <Card pontos={80} participante={"Carol Deó"}/>
          <Card pontos={100} participante={"Jean Ramalho"}/>
          <Card pontos={90} participante={"Victor Silva"}/>
          <Card pontos={80} participante={"Carol Deó"}/>
          <Card pontos={100} participante={"Jean Ramalho"}/>
          <Card pontos={90} participante={"Victor Silva"}/>
          <Card pontos={80} participante={"Carol Deó"}/>
          <Card pontos={100} participante={"Jean Ramalho"}/>
          <Card pontos={90} participante={"Victor Silva"}/>
          <Card pontos={80} participante={"Carol Deó"}/>
          <Card pontos={100} participante={"Jean Ramalho"}/>
          <Card pontos={90} participante={"Victor Silva"}/>
          <Card pontos={80} participante={"Carol Deó"}/>
          <Card pontos={100} participante={"Jean Ramalho"}/>
          <Card pontos={90} participante={"Victor Silva"}/>
          <Card pontos={80} participante={"Carol Deó"}/>
        </View>

      </View>
    )
  
}

export default CompleteRanking