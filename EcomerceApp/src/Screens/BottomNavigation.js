import { FlatList, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import Home from './Home'
import Wishlist from './Wishlist'
import Cart from './Cart'
import Search from './Search'
import Setting from './Setting'
const bottom = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
    <bottom.Navigator screenOptions={{headerShown:false,tabBarHideOnKeyboard:true}}>
      <bottom.Screen name='Home' options={{tabBarIcon:()=>(
        <Ionicons name="home-outline" color={'red'} size={30} />
      ) }} component={Home}/>
      <bottom.Screen name='Wishlist'  options={{tabBarIcon:()=>(
        <Feather name="heart" color={'red'} size={30}/> 
      )}}  component={Wishlist}/>
      <bottom.Screen name='Cart'  options={{tabBarIcon:()=>(
        <View activeOpacity={0.5} style={{borderRadius:30,backgroundColor:'white',width:50,height:50,alignContent:'center',justifyContent:'center',elevation:7,bottom:5}}>
        <View style={{left:8}}>
        <Feather name='shopping-cart' color={'red'} size={30} />
        </View>
        </View>
      )}}  component={Cart}/>
      <bottom.Screen name='Search'  options={{tabBarIcon:()=>(
        <Ionicons name='search' color={'red'} size={30}/> 
      )}}  component={Search}/>
    <bottom.Screen name='Settings'  options={{tabBarIcon:()=>(
        <Feather name='settings' color={'red'} size={30}/> 
      )}}  component={Setting}/>
    </bottom.Navigator>
  )
}
export default BottomNavigation

const styles = StyleSheet.create({})