import { Text, View, ScrollView } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import Card from '../../Components/Card'
import EditRanking from '../../Components/EditRanking'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'



const EditGamer = () => {



  return (
    <ApolloProvider client={client}>

      <View style={styles.container}>
        <ScrollView style={styles.scrollContainer}>
          <View style={styles.container}>
            <EditRanking />           
          </View>
        </ScrollView>
      </View>

    </ApolloProvider>
  )

}

export default EditGamer