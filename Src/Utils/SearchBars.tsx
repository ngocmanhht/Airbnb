import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'




const SearchBars = (props) => {

  return (
<>
<TouchableOpacity onPress={props.goToSearch}>
<View style={styles.searchBar}>     
      <Image
      style={styles.searchIcon}
      source={require('../Img/Search.png')}
      ></Image>
      <View style={styles.txtContainer}>
      <Text style={styles.mainTxt}>Bạn sẽ đi đâu</Text>
      <Text style={styles.secondTxt}>Địa điểm bất kì-Tuần bất kỳ</Text>
      </View> 
    </View>
</TouchableOpacity>
</>
   
  )
}

export default SearchBars

const styles = StyleSheet.create({
  searchBar:{
    width:'85%',
    height:50,
    borderWidth:1,
   alignSelf:'center',
  marginTop:15,
  borderRadius:20,
  flexDirection: 'row',
  alignItems:'center',
  borderColor:'#A4A4A4'
  },
  searchIcon:{
    width:20,height:20,left:5
  },
  txtContainer:{
    flexDirection:'column'
  },
  mainTxt:{
    fontWeight:'bold',
    color:'black',
    left:20
  },
  secondTxt:{
    color:'#908E8E',
    left:20,
    fontWeight:'500'
    
  }
})