import { FlatList, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux'
import { searchPlace } from '../../redux/Action'
import { hotel } from '../../data/hotel'
export const PlaceSearch = ({ navigation }) => {
  const returns = require('../../Img/return.png')
  const dispatch = useDispatch()
  const list = useSelector((store) => store.favor.searchResults)
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } })
    }

  }, [])
  const handle = (places) => {

    dispatch(searchPlace(places))


  }
  const [place, setPlace] = useState('')
  return (
    <View>
      <View style={styles.topContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.returnBtn}>
          <Image source={returns} style={styles.returnImg} />
        </TouchableOpacity>
      </View>
      <View style={styles.midContainer}>

        <View>
          <TextInput style={styles.searchTextInput}
            cursorColor={'black'}
            placeholder={'Tìm kiếm điểm đến'}
            defaultValue={place}

            onChangeText={(places) => handle(places)}
          />
        </View>
        <View style={styles.hotelContainer}>
          <FlatList
            data={list}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Infor', { data: item })}>
                <View style={styles.listedView}>
                  <Text style={styles.hotelNameTxt}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )} />
        </View>
      </View>
    </View>
  )
}

export default PlaceSearch

const styles = StyleSheet.create({
  topContainer: {
    width: '100%', height: 60, marginLeft: 15, justifyContent: 'center'
  },
  returnBtn: {
    width: 30,
    height: 30,
    borderColor: '#7C7B7B',
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  returnImg: {
    width: 20, height: 20
  },
  midContainer: {
    width: '100%',
    height: "91%",
    bottom: 5,
    borderWidth: 1,
    borderColor: '#7C7B7B',
    borderRadius: 40,
    alignContent: "center"
  },
  searchTextInput: {
    width: '80%',
    alignSelf: 'center',
    top: 20,
    height: 50,
    borderWidth: 1,
    borderColor: '#7C7B7B',
    borderRadius: 15
  },
  hotelContainer: {
    width: '100%',
    height: '85%',
    top: 40,
    alignItems: 'center',
    alignContent: 'space-around'
  },
  listedView: {
    width: 300,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10
  },
  hotelNameTxt: {

    height: 40, 
    alignSelf: "center"
  }

})