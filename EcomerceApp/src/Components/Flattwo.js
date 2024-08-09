import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Stars from 'react-native-stars';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {BallIndicator} from 'react-native-indicators';
import Back from '../Style/Back';
const Flattwo = () => {
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
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={product}
        renderItem={({index,item})=>{
            return(
            <View style={{}}>
            <TouchableOpacity style={{width:180,top:15,margin:5,padding:6,borderRadius:10,backgroundColor:'white'}} onPress={allproduct} activeOpacity={0.5}>
            <Image style={{height:180,width:170,flex:1}} source={{uri:item.image}}/>
            <Text style={{color:'black',fontSize:17}}>{item.title}</Text>
            <Text style={{color:'black',fontSize:20}}>${item.price}</Text>
            <Text style={{color:'#4D4B4B',fontSize:20}}>{item.category}</Text>
            <View style={{right:25}}>
            <Stars
             count={5}
             half={true}
             fullStar={<Icon name={'star'} size={25} style={[Back.myStarStyle]} />}
             emptyStar={<Icon name={'star-outline'} size={25} style={[Back.myStarStyle]} />}
             halfStar={<Icon name={'star-half'} size={25} style={[Back.myStarStyle]} />}
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

export default Flattwo

const styles = StyleSheet.create({})