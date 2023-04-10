import { Text, View, ScrollView, TextInput } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'



const Cadastro = () => {



  return (
    <ApolloProvider client={client}>

      <View style={styles.container}>    
        <Text>Nome do Gamer</Text>
        <TextInput />
      </View>

    </ApolloProvider>
  )

}

export default Cadastro