import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../Header'
import Ranking from '../Ranking'
import styles from './style'


export const Main = () => {

    return (
      <View style={styles.container}>
        <Header />
        
        <View style={styles.rankings}>  
          <Ranking tipo="lid" />
          <Ranking tipo="classe" />
        </View>
        
      </View>
    )
  }


