import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = () => {
  return (
    <View style={{backgroundColor:'white',flex:1,justifyContent:'center',alignItems:'center'}}>
     <Image source={require('../assets/images/slash.png')}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})