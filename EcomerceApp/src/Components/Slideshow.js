import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import AntDesign from 'react-native-vector-icons/AntDesign'
const slides = [
    {
      key: 1,
      image: require('../assets/images/shoes.png'),
    },
    {
      key: 2,
      image: require('../assets/images/shoes.png'),
    },
    {
      key: 3,
      image: require('../assets/images/shoes.png'),
    }
  ];
const Slideshow = () => {
  return (
    <AppIntroSlider 
    showNextButton={false}
    showDoneButton={false}
        data={slides}
        activeDotStyle={{backgroundColor:'#F83758'}}
        renderItem={({item,index})=>{
            return(
                <View style={{flex:1}} >
                <ImageBackground style={{flex:1,height:250,top:10}} source={item.image}/>

                </View>
            )  
        }}
      />
  )
}

export default Slideshow

const styles = StyleSheet.create({})