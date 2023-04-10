import { Text, View, ScrollView, TextInput, Picker } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'




const Cadastro = () => {

    const [text, onChangeText] = React.useState('');
    const [pontos, onChangePontos] = React.useState(0);

  return (
    <ApolloProvider client={client}>

      <View style={styles.container}>    

        <Text>Nome do Gamer</Text>
        <TextInput 
        style={styles.nomeInput}
        onChangeText={onChangeText}
        value={text}
        placeholder='Digite nome do novo gamer'
        />

        <Text>Pontuação inicial</Text>
        <TextInput 
        style={styles.nomeInput}
        onChangeText={onChangePontos}
        value={pontos}
        placeholder='Pontuação inicial'
        keyboardType='numeric'
        />

        


      </View>

    </ApolloProvider>
  )

}

export default Cadastro