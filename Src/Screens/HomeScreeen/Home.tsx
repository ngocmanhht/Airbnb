import { Alert, Image, StyleSheet, Text, TouchableOpacity, FlatList, View, TextInput, Modal, ToastAndroid, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import SearchBars from '../../Utils/SearchBars'
import { hotel } from '../../data/hotel'
import { isClicked } from '../../redux/Action'

export const Home = ({ navigation }) => {
  
  useEffect(() => {
    
    dispatch(isClicked({id:0,clicked:true, title:"Thiết kế",img: require('../..//Img/house.png')}))
    setId("Thiết kế")
    navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } })
  
  }, [])
  
  const dispatch = useDispatch()
  const titleList = useSelector((store) => store.list)
  const hotelList= useSelector((store) => store.favor.hotel)

  const hotelListed = (() => hotelList.filter(hotels => hotels.title === id))

  const [onclick, setOnclick] = useState(false)
  const [id, setId] = useState('')

  const handleClick = (item) => {
    dispatch(isClicked({
      id: item.id,
      clicked: !item.clicked,
      title: item.title,
      img: item.img,
    }))
    setId(item.title)

  } 
  return (
    <View style={styles.backGrounds}>
      <SearchBars
        goToSearch={() => navigation.navigate('Search')} />
      {/* Tab Menu */}
      <View>
        <View style={styles.backGround}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={titleList}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity onPress={() => handleClick(item)}>
                  <View style={{ height: 60, width: 85, justifyContent: 'center', borderBottomWidth: item.clicked == true ? 1 : null }}>
                    <Image
                      style={styles.tabImg}
                      source={item.img}
                    />
                    <Text style={styles.tabTxt}>{item.title}</Text>
                  </View>
                </TouchableOpacity>
              </>
            )}
          />
        </View>
        <View style={styles.hotelView}>
          <FlatList
            data={hotelListed()}
           showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <>
                <TouchableOpacity onPress={() => navigation.navigate("Infor",{data:item})}>
                  <View>
                    <Image
                      source={{ uri: item.imageUrl }}
                      style={styles.hotelImg}
                    />
                    <Text style={styles.placeTxt}>{item.name}</Text>
                    <Text style={styles.priceTxt}>{item.price}$ đêm</Text>
                  </View>
                </TouchableOpacity>
              </>

            )} />
        </View>
      </View>
    </View>
  )
}

export default Home
const styles = StyleSheet.create({

  backGrounds:
  {
    backgroundColor: 'white',
    flex: 1,
    alignContent: 'center',

  },
  searchBarContainer: {
    height: 50,
    width: '80%',
    justifyContent: 'space-around',
    marginHorizontal: 40,
    top: 10,
  },
  searchBar: {
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#929090',
    justifyContent: 'flex-start'

  },
  backGround: {
    width: '96%', height: 60, alignSelf: 'flex-end'
  },
  tabImg: {
    width: 20,
    height: 20

  },
  tabTxt: {
    fontWeight: 'bold',
    color: '#8D8B8B'

  },
  hotelView: {
    width: '88%',
    height: '85%',
    flexWrap: 'nowrap',
    alignSelf: 'center',
    marginTop: 10,
    
  },
  hotelImg: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginTop: 30,
   
  

  },
  placeTxt: {
    top: 10,
    fontWeight: '500',
    color: 'black',
    fontSize: 15,
    alignSelf: 'flex-start'
  },
  priceTxt: {
    top: 5, fontSize: 15, alignSelf: 'flex-start'
  }
})