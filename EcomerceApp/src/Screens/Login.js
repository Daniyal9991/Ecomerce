import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Styles from '../Style/Styles'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Constant from '../Style/Constant'
import { useNavigation, useRoute } from '@react-navigation/native'
import auth from '@react-native-firebase/auth';
const Login = () => {
  const [email,setemail]=useState("")
  const [password,setpassword]=useState("")
  const navigation = useNavigation()
  const Authorization=()=>{
  auth()
.signInWithEmailAndPassword(email,password)
  .then(() => {
    console.log('signed in!');
    navigation.replace('Home')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }
    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }
  });
  }
  
  return (
    <View style={Styles.Heading}>
      <Text style={Styles.styl}>Welcome</Text>
      <Text style={Styles.styl}>Back!</Text>
      <View style={Styles.sub}>
      <FontAwesome6 name={'user-large'} size={25} color={'black'} />
      <TextInput onChangeText={(val)=>setemail(val)} style={{color:'black'}}  placeholder='Username or Email' placeholderTextColor={'#676767'}/>
      </View>
      <View style={Styles.sub}>
      <Fontisto name={'locked'} size={25} color={'black'} />
      <TextInput onChangeText={(val)=>setpassword(val)} style={{color:'black'}} secureTextEntry={true}  placeholder=' Password' placeholderTextColor={'#676767'}/>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('Forget')} >
      <Text  style={Styles.forget}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={Authorization} activeOpacity={0.7}>
        <Text style={Styles.login}>Login</Text>
      </TouchableOpacity>
      <Text style={Constant.continue}>- OR Continue with -</Text>
      <View style={Constant.image}>
        <TouchableOpacity style={Constant.touch}>
        <Image source={require('../assets/images/google.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={Constant.touch}>
        <Image source={require('../assets/images/apple.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={Constant.touch}>
        <Image source={require('../assets/images/facebook.png')}/>
        </TouchableOpacity>
      </View>
      <View style={Constant.image}>
      <Text style={Constant.create}>Create An Account</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={()=>navigation.replace('Signup')}>
      <Text  style={Constant.sign}>Sign Up</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})