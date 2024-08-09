import { StyleSheet, Text, View,TouchableOpacity,TextInput,Image, ScrollView, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Styles from '../Style/Styles'
import Modal from "react-native-modal";
import { useNavigation } from '@react-navigation/native'
const Check = () => {
    const navigation = useNavigation()
    const [showmodal,setshowmodal]=useState('')
    const[cancel,setcancel]=useState('')
  return (
    <ScrollView>
       <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',right:50,top:10}}>
      <TouchableOpacity onPress={()=>navigation.navigate('GoCart')} activeOpacity={0.5} style={{borderRadius:30,right:20,backgroundColor:'#DEDBDB',padding:8}}>
      <MaterialIcons name='keyboard-arrow-left' color={'black'} size={30} />
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:25,right:10}}>Checkout</Text>
      </View>
      <View style={{top:20}}>
      <View style={{margin:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{color:'black',fontSize:20}}>Order</Text>
        <Text style={{color:'black',fontSize:20}}>₹7,000</Text>
      </View>
      <View style={{margin:20,bottom:10,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{color:'black',fontSize:20}}>Shipping</Text>
        <Text style={{color:'black',fontSize:20}}>₹30</Text>
      </View>
      <View style={{margin:20,bottom:20,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{color:'black',fontSize:20}}>Total</Text>
        <Text style={{color:'black',fontSize:20}}>₹7,030</Text>
      </View>
      </View>
      <Image style={{width:360,height:3,margin:10}} source={require('../assets/images/lin.png')}/>
    <View>
    <Text style={{color:'black',fontSize:30,margin:10}}>Payment</Text>
    <View style={{bottom:30}}>
      <View style={Styles.subs}>
       <Image source={require('../assets/images/visa.png')}/>
      <Text style={{color:'black',fontSize:20,padding:10}}>*********2109</Text>
      </View>
      </View>
      <View style={{bottom:30}}>
      <View style={Styles.subs}>
       <Image  source={require('../assets/images/paypal.png')}/>
      <Text style={{color:'black',fontSize:20,padding:10}}>*********2109</Text>
      </View>
      </View>
      <View style={{bottom:30}}>
      <View style={Styles.subs}>
       <Image style={{height:30,width:30}} source={require('../assets/images/mesto.png')}/>
      <Text style={{color:'black',fontSize:20,padding:10}}>*********2109</Text>
      </View>
      </View>
      <View style={{bottom:30}}>
      <View style={Styles.subs}>
       <Image style={{height:30,width:30}} source={require('../assets/images/apples.png')}/>
      <Text style={{color:'black',fontSize:20,padding:10}}>*********2109</Text>
      </View>
      </View>
    </View>
    <View style={{bottom:20}}>
      <TouchableOpacity onPress={()=>setshowmodal(true)} activeOpacity={0.7}>
        <Text style={Styles.login}>Continue</Text>
      </TouchableOpacity>
      </View>
      <Modal isVisible={showmodal} animationInTiming={100} animationOutTiming={100} animationOut={'zoomOut'} style={{flexDirection:'row-reverse', justifyContent:'center',alignItems:'center'}} animationIn={'zoomIn'}  transparent={true}>
    
    <View style={{backgroundColor:'white',borderRadius:10,width:350,height:250,alignItems:'center',justifyContent:'center'}}>
    <TouchableOpacity onPress={()=>setshowmodal(false)} style={{padding:10,bottom:20,backgroundColor:'#DDD2D2',right:130,borderRadius:30}} activeOpacity={0.5} >
            <MaterialIcons name='keyboard-arrow-left' color={'black'} size={30} />
        </TouchableOpacity>
            <ImageBackground style={{height:120,width:120,alignItems:'center',justifyContent:'center',bottom:30}} source={require('../assets/images/st.png')}>
            <Image style={{height:40,width:69}} source={require('../assets/images/tick.png')}/>
            </ImageBackground>
            <Text style={{color:'black',bottom:10}}>Payment done successfully.</Text>
    </View>
</Modal>
    </ScrollView>
  )
}

export default Check

const styles = StyleSheet.create({})