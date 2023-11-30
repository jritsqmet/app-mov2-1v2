import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import Imagen from '../components/Imagen'

export default function GaleriaScreen() {

    //const url ='https://4kwallpapers.com/images/walls/thumbs_3t/13542.jpg'
    const datos = [
        { nombre: 'Imagen1', url: 'https://4kwallpapers.com/images/walls/thumbs_3t/13542.jpg' },
        { nombre: 'Imagen2', url: 'https://4kwallpapers.com/images/walls/thumbs_3t/1857.jpg' },
        { nombre: 'Imagen3', url: 'https://4kwallpapers.com/images/walls/thumbs_3t/10661.jpg' },
        { nombre: 'Imagen4', url: 'https://4kwallpapers.com/images/walls/thumbs_3t/10644.jpg' },
        { nombre: 'Imagen5', url: 'https://4kwallpapers.com/images/walls/thumbs_3t/7335.jpeg' },
    ]


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 40, color: '#e3e3e3' }}>GaleriaScreen</Text>
            <View style={{ height: '50%', backgroundColor:'#f4fcca' }}>
                <FlatList
                    data={datos}
                    horizontal={false}
                    renderItem={({ item }) => (
                        // <Image source={{uri:item.url}} style={styles.img1}/>
                        <Imagen data={item} />
                    )} 
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3d50'
    },
    img1: {
        width: 300,
        height: 200
    }
})