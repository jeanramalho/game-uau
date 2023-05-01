import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import {Picker} from '@react-native-picker/picker';
//import { createGamer } from './mutation'
import { gql, useMutation } from '@apollo/client'

const SEND_DATA = gql`
  mutation sendData($nome: String!, $escopo: String!, $pontos: int!) {
    sendData(nome: $nome, escopo: $escopo, pontos: $pontos) {
      id
    }
  }
`;


const createGamer = gql`
    mutation ($nome: String, $escopo: String, $pontos: Int){
        createParticipante(data: {nome: $nome, escopo: $escopo, pontos: $pontos}) {
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
    const [pontos, onChangePontos] = React.useState(0);
    const [escopo, selectedEscopo] = React.useState(0);

    const [createParticipante, {}] = useMutation(createGamer)
    const handleSendData =  async () => {
      await createParticipante({ variables: { nome: text, pontos: escopo, pontos: pontos } });
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

        <TouchableOpacity style={styles.botao} onPress={createParticipante}>
            <Text style={styles.textBotao}>Salvar</Text>
        </TouchableOpacity>


      </View>


  )

}

export default Form