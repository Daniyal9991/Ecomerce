import { Image, ScrollView, StyleSheet, Text,TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Slideshow from '../Components/Slideshow'
import Feather from 'react-native-vector-icons/Feather'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Flatone from '../Components/Flatone'
import Back from '../Style/Back'
import { useNavigation } from '@react-navigation/native'
const Cart = () => {
  const navigation = useNavigation()
  return (
    <ScrollView style={{flex:1,top:10}}>
      <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <TouchableOpacity activeOpacity={0.5} style={{left:10,borderRadius:30,backgroundColor:'#DEDBDB',padding:8}}>
      <MaterialIcons name='keyboard-arrow-left' color={'black'} size={30} />
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={{right:10,borderRadius:30,backgroundColor:'#DEDBDB',padding:9}}>
      <Feather name='shopping-cart' color={'black'} size={25} />
      </TouchableOpacity>
      </View>
      <Slideshow/>
      <View style={{flexDirection:'column',margin:10,bottom:10}}>
        <Text style={{fontSize:25,color:'black'}}>Size: 7UK</Text>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <TouchableOpacity style={{top:10}}>
        <Text style={{fontSize:20,color:'#FA7189',borderRadius:10,borderColor:'#FA7189',borderWidth:2,padding:5}}> 6 UK </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{top:10}}>
        <Text style={{fontSize:20,color:'#FA7189',borderRadius:10,borderColor:'#FA7189',borderWidth:2,padding:5}}> 7 UK </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{top:10}}>
        <Text style={{fontSize:20,color:'#FA7189',borderRadius:10,borderColor:'#FA7189',borderWidth:2,padding:5}}> 8 UK </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{top:10}}>
        <Text style={{fontSize:20,color:'#FA7189',borderRadius:10,borderColor:'#FA7189',borderWidth:2,padding:5}}> 9 UK </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{top:10}}>
        <Text style={{fontSize:20,color:'#FA7189',borderRadius:10,borderColor:'#FA7189',borderWidth:2,padding:5}}> 10 UK </Text>
        </TouchableOpacity>
        </View>
      </View>
      <Text style={{fontSize:30,color:'black',bottom:10,fontWeight:'bold'}}>NIke Sneakers</Text>

      <View style={{flexDirection:'row',left:20}}>
        <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,color:'#808488',right:20}}> ₹2,999</Text>
        <Image style={{bottom:15,right:7}} source={require('../assets/images/line.png')}/>
        </View>
        <Text style={{fontSize:20,color:'black',right:10}}>₹1,500</Text>
        <Text style={{fontSize:20,color:'#FA7189',fontWeight:'bold'}} >50% Off</Text>
      </View>
      <View style={{flexDirection:'column'}}>
        <Text style={{fontSize:20,color:'black'}}>Product Details</Text>
      <Text style={{color:'black',fontSize:17,width:370,margin:10}}>Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of the Air Jordan 1. </Text>
      </View>
      <View style={{flexDirection:'row'}}>
      <TouchableOpacity style={{top:10,flexDirection:'row',borderRadius:10,borderColor:'grey',borderWidth:2,padding:5,left:2}}>
      <Feather name='map-pin' color={'grey'} size={25} />
        <Text style={{fontSize:18,color:'grey'}}>Nearest Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{top:10,flexDirection:'row',borderRadius:10,borderColor:'grey',borderWidth:2,padding:5,left:5}}>
      <Image style={{height:20,width:20,top:3}} source={require('../assets/images/lock.png')}/>
        <Text style={{fontSize:18,color:'grey'}}>VIP</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{top:10,flexDirection:'row',borderRadius:10,borderColor:'grey',borderWidth:2,padding:5,left:10}}>
      <Image style={{height:25,width:25,top:1}} source={require('../assets/images/return.png')}/>
        <Text style={{fontSize:18,color:'grey'}}>Return policy</Text>
        </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',right:10,top:10}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      <TouchableOpacity onPress={()=>navigation.navigate('GoCart')} activeOpacity={0.8} style={{borderRadius:10,flexDirection:'row',alignItems:'center',top:10,left:10}}>
      <View style={{borderRadius:30,padding:12,backgroundColor:'#0B3689',height:60,width:60,alignItems:'center'}}>
      <Feather name='shopping-cart' color={'white'} size={30}/>
      </View>
      <Text style={{fontSize:20,color:'white',borderRadius:10,borderTopLeftRadius:0,borderBottomLeftRadius:0,backgroundColor:'#0B3689',padding:10,right:12}}> Go to cart </Text>
      </TouchableOpacity>
      </View>
      <View style={{flexDirection:'row',alignItems:'center',left:15}}>
      <TouchableOpacity  activeOpacity={0.8} style={{borderRadius:10,flexDirection:'row',alignItems:'center',top:10,left:10}}>
      <View style={{borderRadius:30,padding:12,backgroundColor:'#31B769',height:60,width:60,alignItems:'center'}}>
      <MaterialIcons name='touch-app' color={'white'} size={30}/>
      </View>
      <Text style={{fontSize:20,color:'white',borderRadius:10,borderTopLeftRadius:0,borderBottomLeftRadius:0,backgroundColor:'#31B769',padding:10,right:12}}> Buy Now </Text>
      </TouchableOpacity>
      </View>
        </View>
          <View style={{borderRadius:10,backgroundColor:'#FFCCD5',margin:6,top:25}}>
          <Text style={{color:'black',fontSize:20,top:10}}>Delivery in </Text>
          <Text  style={{color:'black',fontSize:30,fontWeight:'bold'}}>1 within Hour</Text>
          </View>
          <View style={{flexDirection:'row',flex:1,top:20}}>
          <TouchableOpacity style={{top:10,flexDirection:'row',borderRadius:10,borderColor:'black',borderWidth:2,padding:5,left:10}}>
      <Feather name='eye' color={'black'} size={25} />
        <Text style={{fontSize:18,color:'black',textAlign:'center'}}>View Similar    </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{top:10,flexDirection:'row',borderRadius:10,borderColor:'black',borderWidth:2,padding:5,left:20}}>
      <Image style={{width:30,height:30}} source={require('../assets/images/mobi.png')}/>
        <Text style={{fontSize:18,color:'black'}}>Add to Compare</Text>
        </TouchableOpacity>
         </View>
         <View style={{top:20}}>
         <View style={Back.view}>
      <Text style={{color:'black',fontSize:29,top:17,fontWeight:'600'}}>282+ Iteams </Text>
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
         <Flatone/>
         </View>
    </ScrollView>
  )
}

export default Cart

const styles = StyleSheet.create({})