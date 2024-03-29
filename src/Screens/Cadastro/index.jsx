import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'
import Form from '../../Components/Form'


const Cadastro = () => {


  return (
    <ApolloProvider client={client}>

      <View style={styles.container}>    
        <Form />
      </View>

    </ApolloProvider>
  )

}

export default Cadastro