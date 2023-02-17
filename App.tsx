
import React, { type PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Src/Screens/HomeScreeen/Home'
import { Provider } from 'react-redux';
import { store } from './Src/redux/store'

import BottomTabNavigaton from './Src/navigation/bottomTabNavigation/BottomTabNavigation';
import AuthNavigation from './Src/navigation/authNavigation/AuthNavigation';

const App = () => {
//   const Stack = createNativeStackNavigator();
// const Tab= createBottomTabNavigator()

   
  return (
    <Provider store={store}>
    <NavigationContainer>
      <AuthNavigation/>
    </NavigationContainer>
     </Provider>

  );
}


const styles = StyleSheet.create({
 
});

export default App;
