import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Back = StyleSheet.create({
   view:{
flexDirection:'row',
alignItems:'center',
justifyContent:'center'
   },
 image:{
    flex:1,
 },
 text:{
    color:'white',
    fontSize:40,
    textAlign:'center',
    margin:50,
    fontWeight:'bold',
    top:10
 },
 sub:{
    textAlign:'center',
    color:'#F2F2F2',
    fontSize:20,
    fontWeight:'bold',
bottom:15
 },
 Head:{
    margin:20,
    backgroundColor:'#F83758',
    color:'white',
    padding:15,
    paddingLeft:50,
    paddingRight:50,
    fontSize:30,
    borderRadius:10,
    bottom:10
 },
 home:{
   flexDirection:'row',
   alignItems:'center',
   justifyContent:'space-between',
   top:10
 },
 search:{
   backgroundColor:'#F3F3F3',
top:20,
padding:4,
margin:10,
borderRadius:10,
borderWidth:2,
borderColor:'#A8A8A9',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
 },
 heading:{
   backgroundColor:'#F3F3F3',
top:20,
left:10,
margin:10,
borderRadius:8,
borderWidth:2,
borderColor:'#A8A8A9',
flexDirection:'row',
alignItems:'center',
justifyContent:'space-between',
width:70,
height:40
 },
 myStarStyle: {
   color: 'yellow',
   textShadowColor: 'black',
   textShadowOffset: {width: 1, height: 1},
   textShadowRadius: 2,
   right:10,
 },
});

export default Back