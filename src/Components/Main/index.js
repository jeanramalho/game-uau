import { Text, View } from 'react-native'
import React, { Component } from 'react'
import Header from '../Header'
import Ranking from '../Ranking'
import styles from './style'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'



export const Main = () => {

    return (
      <ApolloProvider client={client}>
          <View style={styles.container}>
            
            <View style={styles.container}>
              <Header />
              
              <View style={styles.rankings}>  
                <Ranking tipo="lid" status="top3"/>
                <Ranking tipo="classe" status="top3"/>
              </View>
              
            </View>
      
           </View>

      </ApolloProvider>
      
    )
  }


