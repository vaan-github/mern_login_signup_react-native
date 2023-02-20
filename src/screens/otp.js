import { StyleSheet, Text, View, Image, TextInput, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.png'
import mainlogo from '../../assets/mainlogo.png'
import { button1 } from '../common/button'
import { BWmessage, errorstyle, formgroup, head1, head2, input, label, link, link1 } from '../common/formcss'
import { useState } from 'react'
import { useEffect } from 'react'

const Otp = ({navigation,route}) => {
  const Renderdotcom_signup = 'https://server-mern-login-signup-react-native.onrender.com/signup'
  
  const userdata = route.params.userData;
  const [errormsg, setErrorMsg] = useState(null);
  const [usercode, setUsercode] = useState("XXXX");
  const [actualotp, setActualotp] = useState(null);
  
  useEffect(() => {
    setActualotp(userdata.otp);
  }, [])
  //
  // console.log(route.params.userData.otp);
  // console.log("from otp page",userdata[0]?.otp); //not working 
  // const ngrok_signup = ' https://5c34-103-10-226-151.in.ngrok.io/signup'
  //
  
  const Sendtobackend = () => {
    // console.log("from otp page",userdata.otp);
    // console.log(usercode)
    // console.log(actualotp)
    if (usercode == '' || usercode == 'XXXX') {
      setErrorMsg('Enter OTP Please');
      return;
    }
    else if (usercode !== actualotp) {
      setErrorMsg('Wrong OTP');
      return;
    }
    else if (usercode == actualotp) {
      const fdata = {
        name: userdata.name,
        dob: userdata.dob,
        email: userdata.email,
        password: userdata.password,
      }
      fetch(Renderdotcom_signup, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(fdata)
      }).then(res => res.json()).then(data => {
        // console.log(data);
        if (data.error) {
          setErrorMsg(data.error);
          setTimeout(() => {
            navigation.navigate('signup');
          }, 1000);
        }
        else {
          alert('User created successfully');
          navigation.navigate('login');
        }
      })
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />

      <View style={styles.container1}>
        <View style={styles.s1}>
          {/* <Image style={styles.logo} source={mainlogo} /> */}
          <Text style={styles.h1}>Face Recognition</Text>
          <Text style={styles.small}>Attendence App</Text>
        </View>
        <ScrollView style={styles.s2}>
          <Text style={head1}>Verification</Text>
          <Text style={BWmessage}>A Verification OTP Sent to Your Entered Email</Text>
          {
            errormsg ? <Text style={errorstyle}>{errormsg}</Text> : null
          }
          <View style={formgroup}>
            <Text style={label}>OTP</Text>
            <TextInput style={input} placeholder='1234'
              onChangeText={(text) => setUsercode(text)} 
              onPressIn={()=> setErrorMsg(null)}/>
          </View>
          <TouchableOpacity 
            onPress={() => {
              Sendtobackend();
            }}>
          <Text style={button1} >Verify</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Otp

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',

  },
  container1: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '100%',
    width: '100%',

  },
  patternbg: {
    width: '100%',
    height: '100%',
    top: 0,
    position: 'absolute',
    zIndex: -1,
  },
  logo: {
    height: 100,
    resizeMode: 'contain',
  },
  s1: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 20,
    height: '50%',
  },
  s2: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: '50%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  h1: {
    display: 'flex',
    justifyContent: 'flex-end',
    fontSize: 30,
    color: '#fff',
  },
  small: {
    display: 'flex',
    justifyContent: 'flex-end',
    color: '#fff',
    fontSize: 17,
  },
  formgroup: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginVertical: 10,

  },
  label: {
    fontSize: 17,
    color: '#000',
    marginLeft: 10,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#F5F5F5',
    borderRadius: 20,
    padding: 10,
  },
  fp: {
    display: 'flex',
    alignItems: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 10,
  },
})