import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import Header from '../Header'
import Ranking from '../Ranking'
import styles from './style'


export const Main = () => {

    return (
      <View style={styles.container}>
            <ScrollView style={styles.scrollMain}>
              <View style={styles.container}>
                <Header />
                
                <View style={styles.rankings}>  
                  <Ranking tipo="lid" />
                  <Ranking tipo="classe" />
                </View>
                
              </View>
          </ScrollView>
      </View>
    )
  }


