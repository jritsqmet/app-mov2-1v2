import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'

export default function Busqueda( props: any) {
    //console.log(props.datos)
    const [numero, setnumero] = useState('')

    function buscar(lista: any, numero: number){
        let bandera = false
        for( let item of lista){
            if( item === numero){
                //console.log('Existe')
                //
                bandera= true
                break;
            }
        }

        if( bandera == true){
            Alert.alert('Mensaje', 'Existe')
        }else{
            Alert.alert('Mensaje', 'NO existe')
        }
    }
    


  return (
    <View>
      <Text>Busqueda</Text>
      <TextInput
      keyboardType='numeric'
      onChangeText={ (texto) => ( setnumero(texto) )}
      />
      <Button onPress={ () => buscar(props.datos, +numero ) }>BUSCAR</Button>
    </View>
  )
}

const styles = StyleSheet.create({})