import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../../Screens/HomeScreeen/Home';
import Search from '../../Screens/HomeScreeen/Search';
import Infor from '../../Screens/HomeScreeen/Infor';
import Pay from '../../Screens/HomeScreeen/Pay';
import PlaceSearch from '../../Screens/HomeScreeen/PlaceSearch'


const HomeScreen=()=>{
    const Stack = createNativeStackNavigator();
    const Tab= createBottomTabNavigator()
  
    return(
  
    <Stack.Navigator  >
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />       
          <Stack.Screen name="Search" component={Search} options={{ headerShown: false, }} />
          <Stack.Screen name="Infor" component={Infor} options={{ headerShown: false }} />
          <Stack.Screen name="Pay" component={Pay} options={{ title:'Yêu cầu đặt phòng/Đặt chỗ'  }} />
          <Stack.Screen name="PlaceSearch" component={PlaceSearch} options={{ headerShown: false }} />
        </Stack.Navigator>
  
    )
  }

export default HomeScreen

const styles = StyleSheet.create({})