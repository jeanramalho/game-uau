import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../../Components/Header'
import styles from './style'
import Card from '../../Components/Card'


const CompleteRanking = () => {
  

 
    return (
      <View style={styles.container}>
        <Header />       
        <Text style={styles.title}>Ranking Classe</Text>
        

      </View>
    )
  
}

export default CompleteRanking