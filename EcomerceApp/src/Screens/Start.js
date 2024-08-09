import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import Back from '../Style/Back'
import Styles from '../Style/Styles'

const Start = () => {
    const navigation=useNavigation()
  return (
    <View style={{flex:1}}>
      <ImageBackground style={{flex:1,justifyContent:'flex-end',alignItems:'center'}} source={require('../assets/images/background.png')}>
    <Text style={Back.text}>You want Authentic, here you go!</Text>
    <Text style={Back.sub}>Find it here, buy it now!</Text>
    <TouchableOpacity onPress={()=>navigation.navigate('Home')} activeOpacity={0.7}>
        <Text style={Back.Head}>Get Started</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  )
}

export default Start

const styles = StyleSheet.create({})