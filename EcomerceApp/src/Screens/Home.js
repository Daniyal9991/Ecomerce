import { Image, StyleSheet, Text, View,TextInput, TouchableOpacity, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import Back from '../Style/Back'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Flat from '../Components/Flat'
import Slide from '../Components/Slide'
import Flatone from '../Components/Flatone'
const Home = () => {
  return (
    <ScrollView style={{flex:1,margin:10}}>
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
      <Text style={{color:'black',fontSize:29,top:17,fontWeight:'600'}}>All Featured</Text>
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
    <Flat/>
    <Slide/>
    <View style={{backgroundColor:'#4392F9',padding:10,borderRadius:10,top:5}}>
      <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
      <Text style={{color:'white',fontSize:17}}>Deal of the Day</Text>
     <View style={{flexDirection:'row',alignItems:'center'}} >
      <Image source={require('../assets/images/clock.png')}/>
      <Text style={{color:'white',fontSize:16}}> 22h 55m 20s remaining </Text>
      </View>
      </View>
      <TouchableOpacity activeOpacity={0.5} style={{flexDirection:'row',left:15,borderRadius:10,borderWidth:2,padding:10,borderColor:'white'}}>
      <Text style={{color:'white',fontSize:20,textAlign:'center'}}>View all </Text>
      <AntDesign name="arrowright" color={'white'} size={30} />
      </TouchableOpacity>
      </View>
    </View>
   <Flatone/>
   <View style={{top:50}}>
   <View style={{flexDirection:'row',padding:15,bottom:50,borderRadius:10}}>
    <Image source={require('../assets/images/offer.png')}/>
    <View style={{left:30}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
    <Text style={{color:'black',fontSize:18}}>Special Offers </Text>
   <TouchableOpacity activeOpacity={0.5}>
    <Image source={require('../assets/images/emoj.png')}/>
    </TouchableOpacity>
    </View>
    <Text style={{color:'black',fontSize:12}}>We make sure you get the </Text>
   <Text style={{color:'black',fontSize:12}}>offer you need at best prices</Text>
    </View>
   </View>
   <ImageBackground style={{flex:1,height:200,width:380,bottom:40}} source={require('../assets/images/mac.png')}>
   <View style={{top:50,alignItems:'flex-end',right:40}}>
   <Text style={{fontSize:25,color:'black',fontWeight:'bold',right:5}}>Flat and Heels</Text>
   <Text style={{color:'black',fontSize:15,left:20}}>Stand a chance to get rewarded</Text>
   <TouchableOpacity activeOpacity={0.5} style={{flexDirection:'row',alignItems:'center',top:10,left:20,borderRadius:10,padding:5,paddingRight:20,backgroundColor:'#F83758'}}>
   <Text style={{color:'white',fontSize:20,textAlign:'center'}}> Visit Now </Text>
   <AntDesign name="arrowright" color={'white'} size={30} />
   </TouchableOpacity>
   </View>
   </ImageBackground>
   <View style={{backgroundColor:'#FD6E87',margin:5,padding:10,borderRadius:10}}>
      <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
      <Text style={{color:'white',fontSize:18}}>Trending Products </Text>
     <View style={{flexDirection:'row',alignItems:'center',top:10}} >
      <Image source={require('../assets/images/calender.png')}/>
      <Text style={{color:'white',fontSize:17,left:5}}>Last Date 29/02/22</Text>
      </View>
      </View>
      <TouchableOpacity activeOpacity={0.5} style={{flexDirection:'row',left:40,borderRadius:10,borderWidth:2,padding:10,borderColor:'white'}}>
      <Text style={{color:'white',fontSize:20,textAlign:'center'}}>View all </Text>
      <AntDesign name="arrowright" color={'white'} size={30} />
      </TouchableOpacity>
      </View>
    </View>
    <Flatone/>
    <View>
    <ImageBackground style={{flex:1,height:200,width:380,bottom:10}} source={require('../assets/images/group.png')}/>
    <View style={{backgroundColor:'white',padding:10,bottom:10}}>
      <View style={{flexDirection:'row'}}>
        <View style={{flexDirection:'column'}}>
      <Text style={{color:'black',fontSize:18}}>New Arrivals </Text>
      <Text style={{color:'black',fontSize:16,left:5}}>Summer’ 25 Collections</Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} style={{flexDirection:'row',left:40,borderRadius:10,padding:10,backgroundColor:'#F83758'}}>
      <Text style={{color:'white',fontSize:20,textAlign:'center'}}>View all  </Text>
      <AntDesign name="arrowright" color={'white'} size={30} />
      </TouchableOpacity>
      </View>
    </View>
    </View>
    <View style={{backgroundColor:'white',flex:1}}>
      <Text style={{fontSize:30,color:'black',fontWeight:'bold'}}>Sponsered</Text>
    <ImageBackground style={{flex:1,height:290,width:380,left:2,bottom:2}} source={require('../assets/images/sho.png')}/>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <Text style={{fontSize:20,color:'black',fontWeight:'bold'}} > up to 50% Off</Text>
      <MaterialIcons name={'keyboard-arrow-right'} size={25} color={'black'} />
    </View>
    </View>
    </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({})