import {Text, View, Button, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from "./style"
import Card from "../Card"
import { useNavigation } from '@react-navigation/native'
import { gql, useQuery } from "@apollo/client"