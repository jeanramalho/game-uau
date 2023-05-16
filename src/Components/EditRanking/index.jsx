import {Text, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"
import Card from "../Card"
import { useNavigation } from '@react-navigation/native'
import { gql, useQuery } from "@apollo/client"


const getPart = gql`
 query Myquery ($escopo: String) {
  participantes(where: {escopo: $escopo}, orderBy: pontos_DESC, first: 3) {
    nome
    pontos
    escopo
  }
}
`


const getPartFull = gql`
 query Myquery ($escopo: String) {
  participantes(where: {escopo: $escopo}, orderBy: pontos_DESC) {
    nome
    pontos
    escopo
  }
}
`



const Ranking = ({tipo, status, page}) => {

  let myQuery = ''

  if (status == "top3") {
    myQuery = getPart
  } else if (status == "completo") {
    myQuery = getPartFull
  }

    let {loading, error, data, refetch } = useQuery(myQuery, { variables: { escopo: tipo }, fetchPolicy: 'cache-and-network' })
    if (loading)  {return  <Text>Loading...</Text>}
    
   
   

  const navigation = useNavigation()

  var titleButton = ""

  if (page == 'home') {
    titleButton = "Ver Ranking Completo"
  } else {
    titleButton = "Início"
  }
  

  function openRanking(){
    
    if(tipo == 'lid' && page == 'home'){
    
      navigation.navigate('CompleteRanking')
      refetch()
      
    } else if (tipo == 'classe' && page == 'home')   {
      navigation.navigate('CompleteRankingClasse')
      refetch()
    
    } else  {
      navigation.navigate('Home')
      refetch()
   
    }
  }

  if(tipo == "lid") {

   

    return (
      
      <View style={styles.container}>
      
        <Text style={styles.title}> Ranking Liderança</Text>
        {data.participantes.map(participante => {
          return (
            <Card key={participante.nome} participante={participante.nome} pontos={participante.pontos} />
          )
        })}
        <TouchableOpacity style={styles.botao} onPress={openRanking}>
                    <Text style={styles.textBotao}>{titleButton}</Text>
        </TouchableOpacity>
      
      </View>
    )
  } else if(tipo == "classe"){
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Ranking Classe</Text>
        {data.participantes.map(participante => {
          return (
            <Card key={participante.nome} participante={participante.nome} pontos={participante.pontos} />
          )
        })}
        <TouchableOpacity style={styles.botao} onPress={openRanking}>
                    <Text style={styles.textBotao}>{titleButton}</Text>
        </TouchableOpacity>
      </View>
    )
  }
 
    
  
}

export default Ranking