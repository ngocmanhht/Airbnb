import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Trip = () => {
  return (
    <View >
      <View style={{width:'90%', height:100,borderBottomWidth:1, alignSelf:'center',justifyContent:'center'}}>
        <Text style={{fontSize:30,color:'black', fontWeight:'600'}}>Chuyến đi</Text>

      </View>
      <View style={{width:'90%', height:100,borderBottomWidth:1, alignSelf:'center',justifyContent:'center'}}>
        <Text style={{fontSize:20,color:'black'}}>Chưa có chuyến đi nào được đặt...vẫn chưa!</Text>

      </View>
    </View>
  )
}

export default Trip

const styles = StyleSheet.create({})