import {  View,  } from 'react-native'
import React, { Component } from 'react'
import {Main} from '../../Components/Main'
import { ApolloProvider } from '@apollo/client'
import { client } from '../../Lib/apollo'
import Card from '../../Components/Card'
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


export function Home () {

  
 
    return (
      <ApolloProvider client={client}>
        <View>
            {/* <Main />         */}
        </View>       
      </ApolloProvider>
      
    )

}

export default Home