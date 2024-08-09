import { StyleSheet, Text, View } from 'react-native'
import Splash from './src/Screens/Splash'
import Slider from './src/Screens/Slider'
import Login from './src/Screens/Login'
import Signup from './src/Screens/Signup'
import { useEffect, useState } from 'react'
import Forget from './src/Screens/Forget'
import Start from './src/Screens/Start'
import Home from './src/Screens/Home'
import BottomNavigation from './src/Screens/BottomNavigation'
import Wishlist from './src/Screens/Wishlist'
import GoCart from './src/Screens/GoCart'
import Check from './src/Screens/Check'
import Maps from './src/Screens/Maps'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const App = () => {
 const stack = createNativeStackNavigator()
  return (
  <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown:false}}>
<stack.Screen name='Login' component={Login}/>
<stack.Screen name='Home' component={Home}/>
<stack.Screen name='Signup' component={Signup}/>
<stack.Screen name='Forget' component={Forget}/>

    </stack.Navigator>
  </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})