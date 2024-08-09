import { StyleSheet, Text, View,ScrollView,TouchableOpacity,Image,TextInput } from 'react-native'
import React from 'react'
import Back from '../Style/Back'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import Flattwo from '../Components/Flattwo'
const Wishlist = () => {
  return (
    <View style={{flex:1}}>
      <View style={Back.home}>
        <TouchableOpacity style={{left:10}} activeOpacity={0.5}>
      <FontAwesome6 name="grip-lines" color={'black'} size={30} />
      </TouchableOpacity>
      <Image  source={require('../assets/images/style.png')}/>
     <TouchableOpacity style={{right:10}} activeOpacity={0.5}>
      <Image source={require('../assets/images/Ellipse.png')}/>
      </TouchableOpacity>
      </View>
      <View style={Back.search}>
      <Fontisto name={'search'} size={25} color={'#BBBBBB'} />
      <TextInput style={{right:50}} placeholder='Search any Product..' placeholderTextColor={'#676767'}/>
      <Feather name={'mic'} size={25} color={'#BBBBBB'} />
      </View>
      <View style={Back.view}>
      <Text style={{color:'black',fontSize:27,top:17,fontWeight:'600'}}>52,082+ Iteams </Text>
      <View style={Back.heading}>
      <Text style={{color:'black',left:10}}>Sort</Text>
      <TouchableOpacity style={{right:5}}activeOpacity={0.5}>
      <Image source={require('../assets/images/Vector.png')}/>
      </TouchableOpacity>
      </View>
      <View style={Back.heading}>
      <Text style={{color:'black',left:8}}>Filter</Text>
      <TouchableOpacity style={{right:5}}activeOpacity={0.5}>
      <Image source={require('../assets/images/Component.png')}/>
      </TouchableOpacity>
      </View>
    </View>
    <Flattwo/>
    
    </View>
  )
}

export default Wishlist

const styles = StyleSheet.create({})