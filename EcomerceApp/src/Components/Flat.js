import { FlatList, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Flat = () => {
    
    const Menu = [
    {
        img:require('../assets/images/Beauty.png'),
        name:'Beauty'
    },
    {
        img:require('../assets/images/Fashion.png'),
        name:'Fashion'
    },
    {
        img:require('../assets/images/Kids.png'),
        name:'Kids'
    },
    {
        img:require('../assets/images/Mens.png'),
        name:'Mens'
    },
    {
        img:require('../assets/images/Womens.png'),
        name:'Womens'
    },
    {
        img:require('../assets/images/Beauty.png'),
        name:'Beauty'
    },
    {
        img:require('../assets/images/Fashion.png'),
        name:'Fashion'
    },
    {
        img:require('../assets/images/Kids.png'),
        name:'Kids'
    },
    {
        img:require('../assets/images/Mens.png'),
        name:'Mens'
    },
    {
        img:require('../assets/images/Womens.png'),
        name:'Womens'
    },
    ]
  return (
    <View style={{flex:1}}>
        {/* {Menu[0].time} */}
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={Menu}
        
        renderItem={({index,item})=>{
            return(
            <View >
            <View style={{top:10,margin:10}}>
            <Image source={item.img}/>
            <Text style={{color:'black',textAlign:'center'}}>{item.name}</Text>
            </View>
            </View>
            )
        }}
        />
        </View>
   
  )
}

export default Flat

const styles = StyleSheet.create({})