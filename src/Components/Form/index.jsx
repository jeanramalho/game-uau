import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './style'
import {Picker} from '@react-native-picker/picker';
import { createGamer } from './mutation'
import { useMutation } from '@apollo/client'



const Form = () => {

    const [text, onChangeText] = React.useState('');
    const [pontos, onChangePontos] = React.useState(0);
    const [escopo, selectedEscopo] = React.useState(0);

    const [createParticipante, {}] = useMutation(createGamer)


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

        <TouchableOpacity style={styles.botao} onPress={() => {
          console.log(text)
          createParticipante({variables: {
            nome: text,
            pontos: parseInt(pontos),
            escopo: escopo,
      }})
        }}>
            <Text style={styles.textBotao}>Salvar</Text>
        </TouchableOpacity>


      </View>


  )

}

export default Form