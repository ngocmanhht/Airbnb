import { Image, StyleSheet,Alert, Text, View, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AddToFavor from '../../redux/AddToFavor'
import { addToFlavor } from '../../redux/Action'
import { showFlavor } from '../../redux/Action'


export const Infor = ({ navigation, route }) => {
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } })
    }

  }, [])
  const like= require('../..//Img/like.png')
  const unlike= require('../..//Img/unlike.png')
 const dispatch= useDispatch()
const handleAddToFlavor = ()=>{
 
 dispatch(addToFlavor({

  ...route.params.data,
  favor:!route.params.data.favor
 }))
 dispatch(showFlavor())
 

setIfTrue(!ifTrue)
}
const [ifTrue, setIfTrue] = useState(false)
const [txt, setTxt] = useState('')   
  const star = require('../..//Img/star.png')
  const medal = require('../..//Img/star.png')
  const handlePay = () => {
    navigation.navigate('Pay', { data: route.params.data })
  }
  useEffect(() => {
    setIfTrue(route.params.data.favor)
    console.log(ifTrue)
  }, [])
  

  return (
    <View>
      <ImageBackground
        style={styles.imageBackground}
        source={{ uri: route.params.data.imageUrl }} 
        />
        
      <TouchableOpacity onPress={() => navigation.goBack()} >
        <Image style={styles.returnIcon}
          source={require('../..//Img/back.png')}
        ></Image>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddToFlavor}>
        <Image style={{width:30,height:30,bottom: 277,left:350}}
        source={ifTrue?unlike: like}
        />
        </TouchableOpacity>
      
      <Text style={styles.nameTxt}>{route.params.data.name}</Text>
      <View style={styles.rateContainer}>
        <View style={{ flexDirection: 'row' }}>
          <Image source={star} style={styles.starIcon} />
          <Text style={styles.rateScore}>{route.params.data.rate}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.medalIcon} source={medal} />
          <Text style={styles.medalTxt}>Chủ nhà siêu cấp</Text>
        </View>
      </View>
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewTxt}>{route.params.data.reivew}</Text>
      </View>
      <View style={styles.reviewContainer}>
     
        <Text style={styles.reviewTxt}>{route.params.data.infor}</Text>
      
       
        
      </View>
      <View style={styles.payContainer}>
        <Text style={styles.priceTxt}>${route.params.data.price} đêm</Text>
        
        <TouchableOpacity style={styles.payBtn} onPress={handlePay}>
          <Text style={styles.payTxt}>Đặt phòng</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

export default Infor

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%', height: 270
  },
  returnIcon: {
    width: 30, height: 30, bottom: 250, left: 10
  },
  nameTxt: {
    alignSelf: 'center', fontSize: 30, fontWeight: '500', color: 'black'
  },
  rateContainer: {
    flexDirection: 'row', marginLeft: 15,marginTop:15, justifyContent: 'space-around'
  },
  starIcon: {
    width: 20, height: 20, top: 4
  },
  rateScore: {
    alignSelf: 'center', fontSize: 20
  },
  medalIcon: {
    width: 20, height: 20, alignSelf: 'flex-end'
  },
  medalTxt: {
    alignSelf: 'center',
    fontSize: 20,
    top:2
  },
  reviewContainer: {
    width: '90%',
    height: 80,
    alignSelf: 'center',
    borderTopWidth: 1,
    borderColor: '#8E8E8E',
    top: 15,
    justifyContent: 'center'
  },
  reviewTxt: {
    fontSize: 16, alignSelf: 'center'
  },
  payContainer: {
    width: "100%",
    height: 100,
    borderTopWidth: 1,
    borderColor: '#8E8E8E',
    marginTop: 60,
    flexDirection: 'row',
    justifyContent: "space-around"
  },
  priceTxt: {
    fontSize: 20, fontWeight: '600', color: 'black', alignSelf: 'center'
  },
  payBtn: {
    width: 150,
    height: 50,
    alignSelf: 'center',
    justifyContent: "center",
    borderRadius: 12,
    backgroundColor: "#e82452"
  },
  payTxt: {
    fontSize: 20, alignSelf: 'center', color: 'white'
  }
})