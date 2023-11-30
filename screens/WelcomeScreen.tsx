import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Botones from '../components/Botones'

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:40, color:'white'}}>WelcomeScreen</Text>
      <Botones/>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#2c3e50',
        justifyContent: 'center',
        alignItems: 'center'
    }
})