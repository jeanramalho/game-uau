import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import Header from '../../Components/Header'
import styles from './style'
import Card from '../../Components/Card'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'
import { gql, useQuery } from "@apollo/client"



const CompleteRanking = () => {
  

 
    return (
      <ApolloProvider client={client}>

        <View style={styles.container}>
            <Header />    
              <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>                       
                    <Text style={styles.title}>Ranking Liderança</Text>
                    <View style={styles.rankingContainer}>               
                    
                    </View>       
                </View>
              </ScrollView>
        </View>

      </ApolloProvider>
    )
  
}

export default CompleteRanking