import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'

export default function Botones() {

    function mensaje() {
        Alert.alert('Bienvenido')
        console.log('Bienvenido')
    }

    function mensaje2() {
        Alert.alert("Es un Opacity")
    }

    return (
        <View>
            <Text>Botones</Text>
            <Button
                title='Aceptar'

                onPress={mensaje}
            />
            <TouchableOpacity style={styles.btn1} onPress={mensaje2}>
                <Text>Touchable Opacity</Text>

            </TouchableOpacity>

            <View style= {styles.fila}>
                <TextInput
                    placeholder='Ingrese su nombre'
                    style={styles.input}
                    placeholderTextColor={'blue'}
                />
                <Text> </Text>
                <TextInput
                    placeholder='Ingrese su numero'
                    style={styles.input}
                    keyboardType='number-pad'
                />
            </View>
                <TextInput
                    placeholder='Ingrese email'
                    keyboardType='email-address'
                    style={styles.input}
                />

        </View>
    )
}

const styles = StyleSheet.create({
    btn1: {
        backgroundColor: '#b6b5aa',
        height: 30,
        borderRadius: 10
    },
    input: {
        backgroundColor: 'white',
        height: 50,
        borderRadius: 20
    },
    fila:{
        flexDirection: 'row'
    }
})