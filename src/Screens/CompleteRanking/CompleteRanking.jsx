import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Header from '../../Components/Header'
import styles from './style'
import Card from '../../Components/Card'
import Ranking from '../../Components/Ranking'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'



const CompleteRanking = () => {



  return (
    <ApolloProvider client={client}>

      <View style={styles.container}>
        <Header />
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.container}>
            <Ranking tipo="lid" status="completo" />           
          </View>
        </ScrollView>
      </View>

    </ApolloProvider>
  )

}

export default CompleteRanking