// import {Text, View, Button, TouchableOpacity } from 'react-native'
// import React, { Component } from 'react'
// import styles from "./style"
// import EditCard from "../EditCard"
// import { gql, useQuery, useMutation } from "@apollo/client"
// import { saveUserChanged } from "./mutation"


// const getAllGamers = gql`
//  query Myquery {
//   participantes( orderBy: pontos_DESC) {
//     nome
//     pontos
//     escopo
//   }
// }
// `


// const EditRanking = ({}) => {


//     let {loading, error, data, refetch } = useQuery(getAllGamers)
   
//     if (loading)  {return  <Text>Loading...</Text>}

//     // function updateGamer(newPoints, nameGamer) {

//     //   

//     //   gamerChanged({
//     //     variables: {
//     //       points: newPoints,
//     //       gamer: nameGamer,
//     //     }
//     //   })

//     //   return alert('Gamer Atualizado com Sucesso!')
//     // }
//   const novosPontos = 30547

//     return (
      
//       <View style={styles.container}>
      
//         <Text style={styles.title}> Edit Gamers </Text>
//         {data.participantes.map(participante => {
          
//           return (
//             <EditCard key={participante.nome} 
//             gamer={participante.nome} 
//             points={participante.pontos} 
//             onAction={(novosPontos) => {
//               const [gamerChanged, {}] = useMutation(saveUserChanged)

//               gamerChanged({
//                 variables: {
//                   points: novosPontos,
//                   gamer: participante.nome,
//                 }
//               })
//             }}/>
//           )
//         })}
      
//       </View>
//     )
  
 
    
  
// }

// export default EditRanking
import {Text, View, Button, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from "./style"
import EditCard from "../EditCard"
import { gql, useQuery, useMutation } from "@apollo/client"
import { saveUserChanged } from "./mutation"

const getAllGamers = gql`
 query Myquery {
  participantes( orderBy: pontos_DESC) {
    nome
    pontos
    escopo
  }
}
`

const EditRanking = () => {
  const [novosPontos, setNovosPontos] = useState(0);
  
  let {loading, error, data, refetch } = useQuery(getAllGamers)
   
  if (loading)  {return  <Text>Loading...</Text>}

  const pontinhos = 323

  useEffect(() => {
    setNovosPontos(parseInt(data.participantes.pontos) + pontinhos);
  }, [data]);

  const handleAction = (novosPontos) => {
    const [gamerChanged, {}] = useMutation(saveUserChanged)

    gamerChanged({
      variables: {
        points: novosPontos,
        gamer: participante.nome,
      }
    })
  }

  if (error) {
    return <Text>Error! {error.message}</Text>;
  }

    return (
      
      <View style={styles.container}>
      
        <Text style={styles.title}> Edit Gamers </Text>
        {data.participantes.map(participante => {
          
          return (
            <EditCard key={participante.nome} 
            gamer={participante.nome} 
            points={participante.pontos} 
            newPoints={novosPontos}
            onAction={() => handleAction(novosPontos)}/>
          )
        })}
      
      </View>
    )
  
 
    
  
}

export default EditRanking