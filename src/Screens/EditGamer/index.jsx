import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import Ranking from '../../Components/Ranking'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'



let data = {
    pontos: 500,
    novosPontos: 550,
}

const EditGamer = () => {

        return (
            <ApolloProvider client={client}>

            <View style={styles.container}>
              <ScrollView style={styles.scrollContainer}>
                <View style={styles.container}>
                  <Ranking />           
                </View>
              </ScrollView>
            </View>
      
          </ApolloProvider>   
        )
}

export default EditGamer