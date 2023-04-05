import {Text, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"
import Card from "../Card"
import { useNavigation } from '@react-navigation/native'
import { gql, useQuery } from "@apollo/client"


const getPartLid = gql`
  query MyQuery {
    participantes {
      nome
      pontos
      escopo
    }
  }
`



const Ranking = ({tipo}) => {

  const {loading, error, data } = useQuery(getPartLid)
  if (loading)  return  "Loading..."

  const navigation = useNavigation()

  function openRanking(){
    if(tipo == 'lid'){
      navigation.navigate('CompleteRanking')
    } else if (tipo == 'classe') {
      navigation.navigate('CompleteRankingClasse')
    }    
  }

  if(tipo == "lid") {

   

    return (
      <View style={styles.container}>
        <Text style={styles.title}> Ranking Liderança</Text>
        <Card pontos={100} participante={"Jean Ramalho"}/>
        <Card pontos={90} participante={"Victor Silva"}/>
        <Card pontos={80} participante={"Carol Deó"}/>
        <TouchableOpacity style={styles.botao} onPress={openRanking}>
                    <Text style={styles.textBotao}>Ver Ranking Completo</Text>
        </TouchableOpacity>
      </View>
    )
  } else if(tipo == "classe"){
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Ranking Classe</Text>
        <Card pontos={100} participante={"Grazi"}/>
        <Card pontos={90} participante={"Neia"}/>
        <Card pontos={80} participante={"Deyse"}/>
        <TouchableOpacity style={styles.botao} onPress={openRanking}>
                    <Text style={styles.textBotao}>Ver Ranking Completo</Text>
        </TouchableOpacity>
      </View>
    )
  }
 
    
  
}

export default Ranking