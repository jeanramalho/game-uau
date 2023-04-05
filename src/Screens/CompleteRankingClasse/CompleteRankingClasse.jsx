import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Header from '../../Components/Header'
import styles from './style'
import Card from '../../Components/Card'


const CompleteRankingClasse = () => {
  

 
    return (
      <View style={styles.container}>
          <Header />    
            <ScrollView style={styles.scrollContainer}>
              <View style={styles.container}>                       
                  <Text style={styles.title}>Ranking Classe</Text>
                  <View style={styles.rankingContainer}>               
               
                  </View>       
              </View>
            </ScrollView>
      </View>
    )
  
}

export default CompleteRankingClasse