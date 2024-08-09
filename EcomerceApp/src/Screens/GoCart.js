import { Image, StyleSheet, Text, View,TouchableOpacity,TextInput, ScrollView } from 'react-native'
import React from 'react'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Styles from '../Style/Styles'
import { useNavigation } from '@react-navigation/native'
const GoCart = () => {
    const navigation = useNavigation()
  return (
    <ScrollView style={{flex:1}}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',right:50,top:10}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Cart')} activeOpacity={0.5} style={{borderRadius:30,right:20,backgroundColor:'#DEDBDB',padding:8}}>
      <MaterialIcons name='keyboard-arrow-left' color={'black'} size={30} />
      </TouchableOpacity>
      <Text style={{color:'black',fontSize:25,right:10}}>Checkout</Text>
      </View>
      <View style={{alignItems:'center',top:30}}>
      <Image source={require('../assets/images/girl.png')}/>
      </View>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:20}}>Email Address</Text>
      <View style={Styles.sub}>
      <TextInput  placeholder='Username or Email' placeholderTextColor={'#676767'}/>
      </View>
      <View style={{bottom:20}}>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:20}}>Password</Text>
      <View style={Styles.sub}>
      <TextInput  placeholder='Password' placeholderTextColor={'#676767'}/>
      </View>
      <TouchableOpacity activeOpacity={0.5}>
      <Text style={{color:'#F83758',textAlign:'center',left:70}}>            Change Password</Text>
      </TouchableOpacity>
      </View>
      <View style={{bottom:20}}>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:20}}>Business Address Details</Text>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:18}}>Pincode</Text>
      <View style={Styles.sub}>
      <TextInput style={{color:'black',fontSize:20,padding:10}}>450116</TextInput>
      </View>
      </View>
      <View style={{bottom:30}}>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:18}}>Address</Text>
      <View style={Styles.sub}>
      <TextInput style={{color:'black',fontSize:20,padding:10}}>216 St Paul's Rd, </TextInput>
      </View>
      </View>
      <View style={{bottom:30}}>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:18}}>City</Text>
      <View style={Styles.sub}>
      <TextInput style={{color:'black',fontSize:20,padding:10}}>London </TextInput>
      </View>
      </View>
      <View style={{bottom:30}}>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:18}}>State</Text>
      <View style={Styles.sub}>
      <TextInput style={{color:'black',fontSize:20,padding:10}}>N1 2LL, </TextInput>
      </View>
      </View>
      <View style={{bottom:30}}>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:18}}>Country</Text>
      <View style={Styles.sub}>
      <TextInput style={{color:'black',fontSize:20,padding:10}}>United Kingdom</TextInput>
      </View>
      </View>
      <View style={{bottom:30}}>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:18}}>Country</Text>
      <View style={Styles.sub}>
      <TextInput style={{color:'black',fontSize:20,padding:10}}>United Kingdom</TextInput>
      </View>
      </View>
      <View style={{bottom:20}}>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:20}}>Business Acount Details</Text>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:18}}>Bank Account Number</Text>
      <View style={Styles.sub}>
      <TextInput style={{color:'black',fontSize:20,padding:10}}>204356XXXXXXX</TextInput>
      </View>
      </View>
      <View style={{bottom:30}}>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:18}}>Account Holder’s Name</Text>
      <View style={Styles.sub}>
      <TextInput style={{color:'black',fontSize:20,padding:10}}>Abhiraj Sisodiya</TextInput>
      </View>
      </View>
      <View style={{bottom:30}}>
      <Text style={{color:'black',margin:20,top:40,left:10,fontSize:18}}>IFSC Code</Text>
      <View style={Styles.sub}>
      <TextInput style={{color:'black',fontSize:20,padding:10}}>SBIN00428</TextInput>
      </View>
      </View>
      <View style={{bottom:20}}>
      <TouchableOpacity onPress={()=>navigation.navigate('Check')} activeOpacity={0.7}>
        <Text style={Styles.login}>Save</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default GoCart

const styles = StyleSheet.create({})