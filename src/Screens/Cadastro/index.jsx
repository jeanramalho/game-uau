import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'
import {Picker} from '@react-native-picker/picker';
// import { createGamer } from './mutation'
// import { useMutation } from '@apollo/client'



const Cadastro = () => {

    const [text, onChangeText] = React.useState('');
    const [pontos, onChangePontos] = React.useState(0);
    const [escopo, selectedEscopo] = React.useState(0);

    // const [createParticipante, {}] = useMutation(createGamer)

    // function criaGamer() {
    //   let nome = text
    //   let pontos = pontos
    //   let escopo = escopo

    //   createParticipante({variables: {
    //     nome: nome,
    //     pontos: partInt(pontos),
    //     escopo: escopo,

    //   }})
    // }

  return (
    <ApolloProvider client={client}>

      <View style={styles.container}>    

        <Text style={styles.titleInput}>Nome do Gamer</Text>
        <TextInput 
        style={styles.campoInput}
        onChangeText={onChangeText}
        value={text}
        placeholder='Digite nome do novo gamer'
        />

        <Text style={styles.titleInput}>Pontuação inicial</Text>
        <TextInput 
        style={styles.campoInput}
        onChangeText={onChangePontos}
        value={pontos}
        placeholder='Pontuação inicial'
        keyboardType='numeric'
        />

        <Picker
        style={styles.selectPicker}
        selectedValue={escopo}
        onValueChange={(itemValue, itemIndex) =>
        selectedEscopo(itemValue)
        }>
            <Picker.Item label="Liderança" value="lid" />
            <Picker.Item label="Classe" value="classe" />
        </Picker>

        <TouchableOpacity style={styles.botao}>
            <Text style={styles.textBotao}>Salvar</Text>
        </TouchableOpacity>


      </View>

    </ApolloProvider>
  )

}

export default Cadastro