import { Text, View, Button } from 'react-native'
import React, { Component } from 'react'
import {Main} from '../../Components/Main'


export function Home ({ navigation }) {

  
 
    return (
      <View>
        <Button title="Teste" /> 
        <Main nav={navigation} />
        
      </View>
       
    )

}

export default Home