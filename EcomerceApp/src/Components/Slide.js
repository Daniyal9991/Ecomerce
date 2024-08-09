import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider';
import AntDesign from 'react-native-vector-icons/AntDesign'
const slides = [
    {
      key: 1,
      title: '50-40% OFF',
      text: 'Now in (product)',
      color:'All colours',
      shop:'Shop Now ',
      image: require('../assets/images/Image.png'),
    },
    {
      key: 2,
      title: '50-40% OFF',
      text: 'Now in (product)',
      color:'All colours',
      shop:'Shop Now ',
      image: require('../assets/images/Image.png'),
    },
    {
      key: 3,
      title: '50-40% OFF',
      text: 'Now in (product)',
      color:'All colours',
      shop:'Shop Now ',
      image: require('../assets/images/Image.png'),
    }
  ];
const Slide = () => {
  return (
    <AppIntroSlider 
    showNextButton={false}
    showDoneButton={false}
        data={slides}
        renderItem={({item,index})=>{
            return(
                <View style={{flex:1}} >
                <ImageBackground style={{flex:1,height:250,top:10}} source={item.image}>
                <View style={{top:50,left:10}}>
                <Text style={{fontSize:30,color:'white',fontWeight:'bold'}}>{item.title}</Text>
                <Text style={{color:'white',fontSize:15}}>{item.text}</Text>
                <Text style={{color:'white',fontSize:15}}>{item.color}</Text>
                <TouchableOpacity activeOpacity={0.5} style={{flexDirection:'row',top:10,borderRadius:10,borderWidth:2,padding:10,marginRight:240,borderColor:'white'}}>
                    <Text style={{color:'white',fontSize:17,textAlign:'center'}}>{item.shop}</Text>
                    <AntDesign name="arrowright" color={'white'} size={27} />
                </TouchableOpacity>
                </View>
                </ImageBackground>
                </View>
            )  
        }}
      />
  )
}

export default Slide

const styles = StyleSheet.create({})