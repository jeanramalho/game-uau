import {Text, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"
import EditCard from "../EditCard"
import { useNavigation } from '@react-navigation/native'
import { gql, useQuery } from "@apollo/client"


const getAllGamers = gql`
 query Myquery ($escopo: String) {
  participantes(where: {escopo: $escopo}, orderBy: pontos_DESC) {
    nome
    pontos
    escopo
  }
}
`



const EditRanking = ({}) => {

  let myQuery = getAllGamers

    let {loading, error, data, refetch } = useQuery(myQuery, { variables: { escopo: tipo }, fetchPolicy: 'cache-and-network' })
    if (loading)  {return  <Text>Loading...</Text>}
  



   

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

export default Ranking