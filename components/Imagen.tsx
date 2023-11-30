import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Imagen(props: any) {
  console.log(props.data)

  return (
    <View style={styles.container} >
      <View style={{flexDirection:'row'}}>
        <Text style={{ fontSize: 20 }} >{props.data.nombre}</Text>
        <Image
          source={{ uri: props.data.url }}
          style={styles.img1}
        />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  txt1: {
    color: 'white',
    fontSize: 50
  },
  container: {
    alignItems: 'center'
  },
  img1: {
    width: 300,
    height: 200
  }
})