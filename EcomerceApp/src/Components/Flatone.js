import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BallIndicator} from 'react-native-indicators';
import Back from '../Style/Back';
const Flatone = () => {
const [product,setproduct]=useState([])

useEffect(()=>{
   allproduct()
},[])
const allproduct= async()=>{

    const response = await fetch('https://fakestoreapi.com/products')
    const jsondata = await response.json()
    console.log("🚀 ~ allproduct ~ jsondata:", jsondata)
    setproduct(jsondata)
   }
  return (
    <View style={{flex:1}}>
        <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={product}
        renderItem={({index,item})=>{
            return(
            <View style={{alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity style={{width:180,height:360,top:10,margin:5,padding:6,borderRadius:10,backgroundColor:'white'}} onPress={allproduct} activeOpacity={0.5}>
            <Image style={{height:180,resizeMode:'contain',width:160,flex:1}} source={{uri:item.image}}/>
            <Text style={{color:'black',fontSize:15}}>{item.title}</Text>
            <Text style={{color:'black',fontSize:15}}>${item.price}</Text>
            <Text style={{color:'#4D4B4B',fontSize:15}}>{item.category}</Text>
            <View style={{right:25}}>
            <Stars
             count={5}
             half={true}
             fullStar={<Icon name={'star'} size={20} style={[Back.myStarStyle]} />}
             emptyStar={<Icon name={'star-outline'} size={20} style={[Back.myStarStyle]} />}
             halfStar={<Icon name={'star-half'} size={20} style={[Back.myStarStyle]} />}
             /> 
             </View>
            </TouchableOpacity>
            </View>
            )
        }}
        />
    
        </View>
   
  )
}

export default Flatone

const styles = StyleSheet.create({})