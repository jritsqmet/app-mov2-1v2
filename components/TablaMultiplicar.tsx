import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput } from 'react-native-paper'

export default function TablaMultiplicar() {
    const [numero, setnumero] = useState('')
    const [lista, setlista] = useState([])

    useEffect(() => {
       
        if( numero != ''){
            multiplicacion(+numero)
        }else{
            setlista([])
        }


    }, [numero])
    

    let listaMultiplicacion: any = []
    function multiplicacion(numero: number){
        for( let i=0; i<=10; i++ ){
            console.log( i*numero )
            listaMultiplicacion.push( i*numero )
        }

        setlista( listaMultiplicacion )
    }


  return (
    <View>
      <Text>TablaMultiplicar</Text> 
      <TextInput
        keyboardType='numeric'
        onChangeText={ (texto) => (setnumero(texto))}
      />
      <Text>{lista.join(', ')}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})