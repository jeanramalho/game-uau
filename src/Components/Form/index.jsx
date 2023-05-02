import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import {Picker} from '@react-native-picker/picker';
//import { createGamer } from './mutation'
import { gql, useMutation } from '@apollo/client'



const createGamer = gql`
    mutation ($nome: String!, $pontos: Int!, $escopo: String!){
        createParticipante(data: {nome: $nome, pontos: $pontos, escopo: $escopo}) {
            id
            nome
            escopo
            pontos
    }
    publishParticipante(where: {nome: $nome}, to: PUBLISHED) {
        id
      }
    }
`



const Form = () => {

    const [text, onChangeText] = React.useState('');
    const [points, onChangePontos] = React.useState(0);
    const [esc, selectedEscopo] = React.useState(0);

    const [createParticipante, {}] = useMutation(createGamer)
    const handleSendData =  async () => {
      await createParticipante({ variables: { nome: text, pontos: points, escopo: parseInt(esc) } });
    };

  return (


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
        value={points}
        placeholder='Pontuação inicial'
        keyboardType='numeric'
        />

        <Picker
        style={styles.selectPicker}
        selectedValue={esc}
        onValueChange={(itemValue, itemIndex) =>
        selectedEscopo(itemValue)
        }>
            <Picker.Item label="Liderança" value="lid" />
            <Picker.Item label="Classe" value="classe" />
        </Picker>

        <TouchableOpacity style={styles.botao} onPress={() => {createParticipante({ variables: { nome: text, pontos: parseInt(points), escopo: esc } })}}>
            <Text style={styles.textBotao}>Salvar</Text>
        </TouchableOpacity>


      </View>


  )

}

export default Form