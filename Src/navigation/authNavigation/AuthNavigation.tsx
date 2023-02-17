import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../../Screens/auth/Login'
import BottomTabNavigaton from '../bottomTabNavigation/BottomTabNavigation'
import ChangePass from '../../Screens/auth/ChangePass'
const Stack= createNativeStackNavigator()
const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Login'  >
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />  
    <Stack.Screen name="ChangePass" component={ChangePass} options={{ title:''}} />  
    <Stack.Screen name="HomePage" component={BottomTabNavigaton} options={{ headerShown: false }} />      

  </Stack.Navigator>
  )
}

export default AuthNavigation