import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { country } from '../../data/country'
import { useEffect } from 'react'
export const Search = ({ navigation }) => {
    const cancel = require('../..//Img/cancel.png')
    const search = require('../..//Img/Search.png')
    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } })
        return () => {
          navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } })
        }
    
      }, [])
    return (
        
        <View>
            <View style={{ width: '90%', height: 50, alignSelf: 'center', justifyContent: 'center', marginTop: 12 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image
                        style={{ width: 25, height: 25 }}
                        source={cancel}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ width: '90%', height: 330, borderWidth: 1, borderColor: '#7C7B7B', alignItems: 'center', alignSelf: 'center', borderRadius: 25 }}>
                <View style={{ width: '90%', height: 50 }}>
                    <Text style={{ marginTop: 10, fontSize: 25, fontWeight: "500", color: 'black' }}>Bạn sẽ đi đâu?</Text>
                </View>
                <View style={{ width: '90%', height: 50, borderColor: '#7C7B7B', borderWidth: 1, borderRadius: 15, marginTop: 10 }}>
                    <TouchableOpacity onPress={()=>navigation.navigate('PlaceSearch')}>
                        <View style={{ flexDirection: 'row', marginTop: 14, marginLeft: 16 }}>
                            <Image
                                source={search}
                                style={{ width: 20, height: 20 }}
                            />
                            <Text>Tìm kiếm điểm đến</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={{ width: '90%', top: 10, height: '54%', borderColor: '#7C7B7B', marginTop: 10 }}>
                    <FlatList
                        horizontal={true}
                        data={country}
                       showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <>
                                <TouchableOpacity>
                                    <View style={{ marginLeft: 20, borderWidth: 1, alignItems: 'center', marginTop: 20, borderRadius: 10 }}>
                                        <Image
                                            style={{ width: 120, height: 100, borderRadius: 10 }}
                                            source={item.img} />

                                        <Text>{item.country}</Text>
                                    </View>
                                </TouchableOpacity>
                            </>

                        )}
                    />
                </View>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',borderWidth:1, width:'90%' ,height:50,marginTop:20,borderRadius:25, alignSelf:'center',justifyContent:'space-between'}}>
                <Text style={{left:10}} >Thời gian</Text>
                <Text style={{right: 15}} >1 tuần</Text>
            </View>
            <View style={{flexDirection:'row',alignItems:'center',borderWidth:1, width:'90%' ,height:50,marginTop:20,borderRadius:25, alignSelf:'center',justifyContent:'space-between'}}>
                <Text style={{left:10}} >Khách</Text>
                <Text style={{right: 15}} >Thêm Khách</Text>
            </View>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})