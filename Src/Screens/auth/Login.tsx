import { StyleSheet, Text, View, TouchableOpacity, TextInput, Button, Image, Alert, DevSettings } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackNavigationState } from '@react-navigation/native'
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { store } from '../../redux/store';
import { login } from '../../redux/Action';
import { getData } from '../../redux/Action';

const Login = ({ navigation }) => {

  const url='https://run.mocky.io/v3/2efbf61c-0000-45f4-9daa-a73ebfe2abb8';
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [title, setTitle] = useState([]);
 
  // useEffect(() => {
  //   fetch(url)
  //   .then((response) =>response.json())
  //   .then((json)=>
  //   {
  //     setData(json.hotel);
      
  //   })
  //   .catch((err)=>console.log(err))
  //   .finally(()=>setLoading(false));

  // }, []);


  useEffect(() => {
    
  dispatch(getData())
  }, [])
  
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      userName: '',
      password: '',
    }
  });
  const dispatch = useDispatch()
  const loginInfor = useSelector((store) => store.login.loginInfor)
  const str= useSelector((store) => store.favor.hotel)
  const logo = require('../../Img/logo.png')
 const handle= ()=>{
 console.log(str.hotel)
 }
  const onSubmit = data => {


    if (data.userName == loginInfor.userName && data.password == loginInfor.password) {
    
  
      navigation.navigate("HomePage")
    }
    else {
      Alert.alert("Login failed")
    }
  }
  return (
    <View style={styles.backGround}>
      <View style={styles.topContainer}>
        <Image
          source={logo}
          style={styles.logo}
        />
        <Text style={styles.welcomeTxt}>Welcome on AirBnB!</Text>
      </View>
      <View style={styles.loginContainer}>
        <Controller
          control={control}
          rules={{
            required: true,
            maxLength: 20
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={'Username'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="userName"
        />
        {errors.userName && <Text>This is required.</Text>}

        <Controller
          control={control}
          rules={{
            maxLength: 20,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder={'Password'}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={true}
            />

          )}
          name="password"
        />
        <View >
          <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.signInButton}>
            <Text style={styles.txt}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ChangePass", { data: loginInfor.userName })} style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.txt}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handle} style={{ alignItems: 'center', marginTop: 10 }}>
            <Text style={styles.txt}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

      </View>

    </View>
  )
}


export default Login

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    backgroundColor: '#e54b55'
  },
  topContainer: {
    marginTop: 50,
    width: '90%',
    height: 90,
    alignSelf: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 80,
    height: 80
  },
  welcomeTxt: {
    marginTop:10,
    fontSize: 20,
    color: 'white'
  },
  loginContainer: {
    marginTop: 30
  },
  input: {
    width: "60%",
    height: 50,

    alignSelf: 'center',
    marginTop: 20,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  signInButton: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    alignSelf: "center",
    marginTop: 35,
    alignItems: 'center',
    backgroundColor: '#e54b55',
    borderRadius: 20,
    justifyContent: 'center',
    borderColor: 'white',

  },
  txt: {
    color: 'white',
    fontSize: 18
  }

})