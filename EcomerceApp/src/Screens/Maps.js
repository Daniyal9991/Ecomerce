import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Geolocation from '@react-native-community/geolocation'
const Maps = () => {
useEffect(()=>{
currentLocation()
},[])
const currentLocation =()=>{
Geolocation.getCurrentPosition((val)=>console.log(val))
}
    return (
        <MapView
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} style={{ height: '100%', width: '100%'}}>
            <Marker coordinate={{longitude:-122.4324,latitude:37.78825}}/>
        </MapView>
    )
}

export default Maps

const styles = StyleSheet.create({})