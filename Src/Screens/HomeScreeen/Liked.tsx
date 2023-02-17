import { StyleSheet, Text, View,FlatList,TouchableOpacity,Image } from 'react-native'
import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../redux/store'
import { showFlavor } from '../../redux/Action'

const Liked = ({navigation}) => {
  const dispatch= useDispatch()
  const favor= useSelector((store)=>store.favor.favorResults)
 
  const show=()=>{
    dispatch(showFlavor())
  }
  
  return (
    <View>
      <Text style={styles.nameTxt}>DANH SÁCH YÊU THÍCH</Text>
      {/* <TouchableOpacity style={styles.renderBtn} onPress={show}>
        <Text style={styles.txtRender}>CLICK TO RENDER</Text>
      </TouchableOpacity> */}
      <View style={styles.flatListView}>
        {
          favor.length > 0
          ? null
          :<Text style={styles.txt}>Tạo danh sách yêu thích đầu tiên </Text>
        }
      <FlatList
      data={favor}
      showsVerticalScrollIndicator={false}
      renderItem={({item})=>(
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
      )}
      />
      </View>
      
    </View>
  )
}

export default Liked

const styles = StyleSheet.create({
txt:{
  fontSize: 20, fontWeight: '400', color: 'black',
  marginTop:10, marginLeft:20
},
  nameTxt: {
    alignSelf: 'center', fontSize: 30, fontWeight: '500', color: 'black', marginTop:15
  },

  renderBtn:{
    borderRadius:15, 
    backgroundColor:'#e82452',
    alignSelf:'center',
     width:'60%',
      height:40,
      justifyContent:"center"
  },
  txtRender:{
    fontSize:16,alignSelf:'center', color:'white'
  },
hotelImg: {
  width: "100%",
  height: 300,
  borderRadius: 10,
  marginTop: 30

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
},
flatListView:{
  width:'95%',
  alignSelf:"center",
  height: "91%",
}

})