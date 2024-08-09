import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'

const Setting = () => {
  const navigation=useNavigation()
  return (
    <View style={{flex:1,top:10}}>
   <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',top:10}}>
      <TouchableOpacity  activeOpacity={0.5}>
      <MaterialIcons name='keyboard-arrow-left' color={'black'} size={35} />
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:20}}>Account</Text>
      <TouchableOpacity activeOpacity={0.5}>
      <Image style={{height:30,width:30,right:10}} source={require('../assets/images/Bell.png')}/>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',top:40,padding:10,backgroundColor:'white',margin:10,borderRadius:10}}>
      <TouchableOpacity activeOpacity={0.5}>
      <Image style={{height:25,width:25,left:10}} source={require('../assets/images/Box.png')}/>
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:20,right:60}}>My Orders</Text>
      <TouchableOpacity activeOpacity={0.5}>
      <MaterialIcons name='keyboard-arrow-right' color={'black'} size={35} />
      </TouchableOpacity>
      </View>
      <View style={{top:40,padding:10,paddingBottom:100,backgroundColor:'white',margin:10,borderRadius:10}} >
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <TouchableOpacity activeOpacity={0.5}>
      <Image style={{height:25,width:25,left:10}} source={require('../assets/images/Details.png')}/>
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:20,right:60}}>My Details</Text>
      <TouchableOpacity activeOpacity={0.5}>
      <MaterialIcons name='keyboard-arrow-right' color={'black'} size={35} />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',top:20}}>
      <TouchableOpacity activeOpacity={0.5}>
      <Image style={{height:25,width:25,left:10}} source={require('../assets/images/Address.png')}/>
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:20,right:40}}>Address Books</Text>
      <TouchableOpacity activeOpacity={0.5}>
      <MaterialIcons name='keyboard-arrow-right' color={'black'} size={35} />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',top:40}}>
      <TouchableOpacity activeOpacity={0.5}>
      <Image style={{height:25,width:25,left:10}} source={require('../assets/images/Card.png')}/>
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:20,right:30}}>Payment Methods</Text>
      <TouchableOpacity activeOpacity={0.5}>
      <MaterialIcons name='keyboard-arrow-right' color={'black'} size={35} />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',top:60}}>
      <TouchableOpacity activeOpacity={0.5}>
      <Image style={{height:25,width:25,left:10}} source={require('../assets/images/Bell.png')}/>
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:20,right:50}}>Notifications</Text>
      <TouchableOpacity activeOpacity={0.5}>
      <MaterialIcons name='keyboard-arrow-right' color={'black'} size={35} />
      </TouchableOpacity>
      </View>
      </View>
      <View style={{top:40,padding:10,paddingBottom:30,backgroundColor:'white',margin:10,borderRadius:10}} >
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',top:10}}>
      <TouchableOpacity activeOpacity={0.5}>
      <Image style={{height:30,top:3,width:30,left:10}} source={require('../assets/images/Question.png')}/>
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:20,right:80}}>FAQS</Text>
      <TouchableOpacity activeOpacity={0.5}>
      <MaterialIcons name='keyboard-arrow-right' color={'black'} size={35} />
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',top:20}}>
      <TouchableOpacity activeOpacity={0.5}>
      <Image style={{height:25,width:25,left:10}} source={require('../assets/images/Headphones.png')}/>
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:20,right:50}}>Help Center</Text>
      <TouchableOpacity activeOpacity={0.5}>
      <MaterialIcons name='keyboard-arrow-right' color={'black'} size={35} />
      </TouchableOpacity>
      </View>
      </View>
      <View style={{top:40,padding:10,paddingBottom:30,backgroundColor:'white',margin:10,borderRadius:10}} >
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',top:10}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Login')} activeOpacity={0.5}>
      <Image style={{height:30,top:3,width:30,left:10}} source={require('../assets/images/Logout.png')}/>
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:20,right:80}}>Logout</Text>
      <TouchableOpacity  activeOpacity={0.5}>
      <MaterialIcons name='keyboard-arrow-right' color={'black'} size={35} />
      </TouchableOpacity>
      </View>
      </View>
    </View>
  )
}

export default Setting

const styles = StyleSheet.create({})