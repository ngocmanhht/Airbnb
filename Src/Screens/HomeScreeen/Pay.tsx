import { Image, StyleSheet, TouchableOpacity, Text, View, ImageBackground, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import { increase } from '../../redux/Action';
import { decrease } from '../../redux/Action';
import { reset } from '../../redux/Action';
import { useSelector, useDispatch } from 'react-redux';

export const Pay = ({ navigation, route }) => {
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
  }, [])

  const dispatch = useDispatch()
  const daySelect = useSelector((store) => store.day.day)
  const price = useSelector((store) => store.day.price)
  const up = require('../..//Img/up.png')
  const down = require('../..//Img/down.png')
  const [isDisable, setIsDIsable] = useState(false)
const singlePrice= route.params.data.price
  const handlePay = () => {
    if (daySelect == 0) {
      Alert.alert("Hãy chọn ngày")

    } else {                
      Alert.alert("THANH TOAN THANH CONG")
      dispatch(reset())
      navigation.navigate('Home')
    }
  }

  const handeAddDay = () => {

    dispatch(increase(route.params.data.price))
    setIsDIsable(false)

  }
  const handeDay = () => {
    if (daySelect > 0) {
      dispatch(decrease(route.params.data.price))

    }
    else {
      setIsDIsable(true)

    }
  }
  return (

<View style={styles.backGround}>
<View style={styles.topContainer}>
  <Image source={{uri:route.params.data.imageUrl}} style={styles.mainImg}/>
  <Text style={styles.txt}>{route.params.data.name}</Text>
</View>
<View style={{width:'90%', height:60, borderColor:"#929090",borderTopWidth:1,alignSelf:'center', alignItems:'center', justifyContent:'center'}}>
  <Text style={styles.txt}>Đặt phòng của bạn được bảo vệ bởi aircover</Text>
</View>     
      <View style={styles.payArea}>
        <View style={styles.insidePayView}>
        <Text style={styles.selectTxt}>Chuyến đi của bạn:</Text>      
        <View style={styles.handleDayView}>
          <Text style={styles.txt}>Số ngày:</Text>
          <TouchableOpacity style={styles.btn} onPress={handeAddDay}>
            <Image style={styles.img} source={up} />          
          </TouchableOpacity>      
            <Text style={styles.dayTxt}>{daySelect}</Text>         
          <TouchableOpacity style={styles.btn} disabled={isDisable} onPress={handeDay}>       
          <Image style={styles.img} source={down} />         
          </TouchableOpacity>
        </View>
        </View>
      </View>
      <View style={styles.handlePayView}>
          <Text style={styles.txt}>Chi tiết giá</Text>
        <Text style={styles.mainTxt}>${singlePrice}x{daySelect} đêm              {price}$</Text>
        <Text style={styles.subTxt}>*Lưu ý giá trên chưa bao gồm VAT</Text>
        <TouchableOpacity style={styles.payBtn} onPress={handlePay}>
          <Text style={styles.payTxt}>Thanh Toán</Text>
        </TouchableOpacity>
        </View>     
    </View>
  )
}

export default Pay

const styles = StyleSheet.create({
  backGround: {
   flex:1, backgroundColor:'white'

  },
  topContainer:{

    width:'100%',
     height:150,
     borderTopWidth:1,
      borderColor:'#929090',
      flexDirection:'row', 
      justifyContent:'space-evenly',
      paddingTop:20,
       alignItems:'center'
  },
  txt:{
    fontSize:17,
    color:'black'
  },
  mainImg:{
    width:150, height:100,
    
  },
  payArea: {
    width: '100%',
    height: '25%',
   borderTopWidth:6,
   borderBottomWidth:6,
   borderColor:"#929090",
    alignSelf: 'center'
  },
  insidePayView:{

    width:'90%', height:150,alignSelf:'center'
  },

  selectTxt: {
    fontSize: 20,
    color: '#2D3333',
    marginTop: 10,
    

  },
  handleDayView: {
    width:'90%',
    height: 60,
    flexDirection: 'row',
    borderRadius: 10,
   marginTop:5
  }, 
  handlePayView:{
    paddingTop:20, width:'90%', alignSelf:'center'
  },
  btn: {
    width: 20,
    height: 20,
    top:5, 
    paddingHorizontal:30
  },
 
  img: {
    width: 15,
    height: 15,
    
  },
 
  dayTxt: {
    fontSize:20,color:'black',
    left:5
    
  },
  mainTxt: {
    fontSize: 25
  },
  subTxt: {
    top:10,
    fontSize: 20

  },
  payBtn: {
    backgroundColor: '#e82452',
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 20
    , marginTop: 40
  },
  payTxt: {
    alignSelf: 'center', color: 'white'
  }

})