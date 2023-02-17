import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Liked from '../../Screens/HomeScreeen/Liked';
import Infor from '../../Screens/HomeScreeen/Infor';
import Pay from '../../Screens/HomeScreeen/Pay';

export const Likes=()=>{
    const Stack = createNativeStackNavigator();
    const Tab= createBottomTabNavigator()
  
    return(
  
    <Stack.Navigator  >
          <Stack.Screen name="LikeS" component={Liked} options={{ headerShown: false }} />       
          <Stack.Screen name="Infor" component={Infor} options={{ headerShown: false }} />
          <Stack.Screen name="Pay" component={Pay} options={{ title:'Yêu cầu đặt phòng/Đặt chỗ'}} />

        </Stack.Navigator>
  
    )
  }

export default Likes

