import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { changePass } from '../../redux/Action';
import { useDispatch } from 'react-redux';

export const ChangePass = ({navigation,route}) => {
 
  const dispatch = useDispatch()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
     newPassword:'',
     rePassword:''

    }
  });
  const onSubmit = data =>{
    console.log(data);
    if(data.newPassword=== data.rePassword)
    {
      console.log('CHANGE SUCCESS');
      navigation.navigate("Login")

      dispatch(changePass(data.newPassword))
      
    }
    else
    {
      console.log('PASS DONT MATCH');
      
    }
  }
  
  return (
    <View>
      <View style={styles.topContainer}>
      <Text style={styles.mainTitle}>UPDATE PASSWORD</Text>
      </View>
      <View style={{marginTop:40}}>
      <Controller
          control={control}
          rules={{
            required: true,
            maxLength:20
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={'Enter new password'}
              cursorColor={'black'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
      secureTextEntry={true}      
            />
          )}
          name="newPassword"
        />
        {errors.newPassword && <Text>This is required.</Text>}
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength:20
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={'Confirm new password'}
              cursorColor={'black'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
      secureTextEntry={true}      
            />
          )}
          name="rePassword"
        />
        {errors.rePassword && <Text>This is required.</Text>}
      </View>
     
  <TouchableOpacity onPress={  handleSubmit(onSubmit)} style={styles.updateBtn}>
    <Text style={{alignSelf:'center',color:'white', fontSize:20}}>UPDATE</Text>
  </TouchableOpacity>
  
    </View>
  )
}

export default ChangePass

const styles = StyleSheet.create({
 topContainer: {

  width:'100%',height:40, justifyContent:'center', alignItems:'center'
 },
 mainTitle: {
  fontSize:28, color:'black', fontWeight:"600"

 },
  input:{
    width:'80%', height:60,borderWidth:1, alignSelf:'center',borderRadius:10, marginTop:30
  },
  updateBtn:{
    width:'80%',
    height:60,
    backgroundColor:'black', 
    alignSelf:'center',
    borderRadius:10, 
    marginTop:30,
     justifyContent:'center'
  },

  
})