import { StyleSheet, Text, View,Image} from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Trip from '../../Screens/HomeScreeen/Trip';
import Mail from '../../Screens/HomeScreeen/Mail';
import Liked from '../../Screens/HomeScreeen/Liked';
import Account from '../../Screens/HomeScreeen/Account';
import HomeScreen from '../appNaVigation/HomeScreen';

import Likes from '../appNaVigation/Likes';

const BottomTabNavigaton=()=>{

const home= require('../../Img/Search.png')
const like= require('../../Img/heart.png')
const trip= require('../../Img/trip.png')
const mail= require('../../Img/mail.png')
const account= require('../../Img/login.png')

const Tab= createBottomTabNavigator()
  
    return(
    <Tab.Navigator  >
    <Tab.Screen name='Homes'options={{headerShown:false,title:'Khám phá',
     tabBarIcon: () => (
       <Image source={home} style= {styles.icon}></Image>)}}component={HomeScreen}></Tab.Screen>
       <Tab.Screen name='Liked'options={{headerShown:false,title:'Yêu thích',
     tabBarIcon: () => (
       <Image source={like} style= {styles.icon}></Image>)}}  component={Likes}></Tab.Screen>
       <Tab.Screen name='Trip' options={{headerShown:false,title:'Chuyến đi',
     tabBarIcon: () => (
       <Image source={trip} style= {styles.icon}></Image>)}} component={Trip}></Tab.Screen>
       <Tab.Screen name='Mail' options={{headerShown:false,title:'Hộp thư',
     tabBarIcon: () => (
      <Image source={mail} style= {styles.icon}></Image>)}} component={Mail}></Tab.Screen>
    <Tab.Screen name='Account' options={{ headerShown:false,title:'Hồ sơ',
     tabBarIcon: () => (
      <Image source={account} style= {styles.icon}></Image>)}} component={Account}></Tab.Screen>
  </Tab.Navigator>
      )
    }

export default BottomTabNavigaton

const styles = StyleSheet.create({
icon:{
width:20,
 height:20,
 resizeMode:'contain'

}

})