import { StyleSheet, Text, View, TouchableOpacity, DevSettings, Image } from 'react-native'
import React from 'react'


export const Account = ({ navigation }) => {
  const user = require('../..//Img/user.png')
  const iconHouse= require('../../Img/houses.png')
  const handle = () => {
    DevSettings.reload()
  }
  return (
    <View >
      <View style={styles.titleContainer}>
        <Text style={styles.titleTxt}>HỒ SƠ</Text>

      </View>
      <TouchableOpacity>
        <View style={styles.profileContainer}>

          <View style={styles.imgContainer}>
            <Image source={user} style={styles.userIcon} />
            <View style={{ marginRight: 40 }}>
              <Text style={{ fontWeight: '500' }}>Ngọc</Text>
              <Text>Hiển thị hồ sơ</Text>

            </View>

          </View>

          <Text style={styles.icon}>{'>'}</Text>


        </View>
      </TouchableOpacity>
      <View style={styles.nameContainer}>
        <View style={styles.midContainer}>
          <Text style={styles.rentTxt}>Cho thuê nhà</Text>
          <Text style={styles.rentTxt}>trên Airbnb</Text>
        </View>
        <Image source={iconHouse} style={styles.house} />
      </View>

      <TouchableOpacity onPress={handle}>

        <Text style={styles.signOut}>Đăng xuất</Text>

      </TouchableOpacity>


    </View>
  )
}


export default Account

const styles = StyleSheet.create({
  titleContainer: {
    width: '90%', height: 60, marginTop: 5, alignSelf: 'center'
  },
  titleTxt: {
    fontSize: 30, color: 'black', fontWeight: '600'
  },
  profileContainer: {
    width: '90%',
    height: 80,
    borderColor: '#929090',
    marginTop: 5,
    alignSelf: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  imgContainer: {
    width: '60%',
    height: 80,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  userIcon:{
    width: 60, height: 60, marginLeft: 5
  },
  nameContainer: {
    paddingTop: 10,
    width: '90%',
    height: 100,
    borderColor: '#929090',
    borderRadius: 15,
    marginTop: 40,
    alignSelf: 'center',
    borderWidth: 1,
    flexDirection: 'row'
    , justifyContent: 'space-around'
  },
  icon: {
    fontSize: 50,
    color: 'black',
    fontWeight: '200',
    alignSelf: 'flex-end',
    marginRight: 10
  },
  midContainer: {
    marginTop: 5
  },
  rentTxt: {

    fontSize: 15,
    fontWeight: '500',
    color: 'black'
  },

  house: {
    width: 80,
    height: 80,
    resizeMode:'contain'
  },
  signOut: {
    color: 'black',
    fontSize: 20,
    textDecorationLine: 'underline',
    alignSelf: 'center',
    marginTop: 20
  }



})