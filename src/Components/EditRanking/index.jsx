import {Text, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"
import EditCard from "../EditCard"
import { gql, useQuery, useMutation } from "@apollo/client"


const getAllGamers = gql`
 query Myquery {
  participantes( orderBy: pontos_DESC) {
    nome
    pontos
    escopo
  }
}
`
const saveUserChanged = gql`
  mutation($points: Int, $gamer: String) {
    updateParticipante(data: {pontos: $points}, where: {nome: $gamer}) {
      id
    }
  }
`



const EditRanking = ({}) => {


    let {loading, error, data, refetch } = useQuery(getAllGamers)
    if (loading)  {return  <Text>Loading...</Text>}

    function updateGamer(newPoints, nameGamer) {

      const [gamerChanged, {}] = useMutation(saveUserChanged)

      gamerChanged({
        variables: {
          points: newPoints,
          gamer: nameGamer,
        }
      })
    }
  

    return (
      
      <View style={styles.container}>
      
        <Text style={styles.title}> Edit Gamers </Text>
        {data.participantes.map(participante => {
          return (
            <EditCard key={participante.nome} gamer={participante.nome} points={participante.pontos} />
          )
        })}
      
      </View>
    )
  
 
    
  
}

export default EditRanking