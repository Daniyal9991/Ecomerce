import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import Constant from '../Style/Constant';
import { useNavigation } from '@react-navigation/native';
const slides = [
    {
      key: 1,
      title: 'Choose Products',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: require('../assets/images/image1.png'),
    },
    {
      key: 2,
      title: 'Make Payment',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: require('../assets/images/image2.png'),
    },
    {
      key: 3,
      title: 'Get Your Order',
      text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
      image: require('../assets/images/image3.png'),
    }
  ];
  
const Slider = () => {
  const navigation=useNavigation()
  return (
    <AppIntroSlider style={Constant.slide}
    renderNextButton={()=>{return(<Text style={Constant.next}>Next</Text>)}}
    renderDoneButton={()=>{return(<Text onPress={()=>navigation.navigate('Login')} style={Constant.next}>Done</Text>)}}
    renderPrevButton={()=>{return(<Text  style={Constant.prev}>Prev</Text>)}}
    showPrevButton={true}
    dotStyle={{backgroundColor:'grey'}}
    activeDotStyle={{width:40,backgroundColor:'black'}}

        data={slides}
        renderItem={({item,index})=>{
            return(
                <View style={Constant.img}>
                <Image  source={item.image}/>
                <Text style={Constant.title}>{item.title}</Text>
                <Text style={Constant.description}>{item.text}</Text>
                </View>
            )  
        }}
      />
  )
}

export default Slider

const styles = StyleSheet.create({})