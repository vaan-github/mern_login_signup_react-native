import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import pattern from '../../assets/pattern.png'
import mainlogo from '../../assets/mainlogo.png'
import { button1 } from '../common/button'
import { errorstyle, formgroup, head1, head2, input, label, link, link1 } from '../common/formcss'

const ngrok_signup = 'https://server-mern-login-signup-react-native.onrender.com/signup'

const Signup = ({ navigation }) => {

  const [fdata, setFdata] = useState({
    name: '',
    dob: '',
    email: '',
    password: '',
    cpassword: '',
  })
  const [errormsg, setErrorMsg] = useState(null);

  const Sendtobackend = () => {
    // console.log(fdata)
    if (fdata.name == '' ||
      fdata.email == '' ||
      fdata.password == '' ||
      fdata.cpassword == '' ||
      fdata.dob == '') {
      setErrorMsg('All fields are required');
      return;
    } else {
      if (fdata.password !== fdata.cpassword) {
        setErrorMsg('Password and Confirm Password must be same');
        return;
      } else {
        fetch(ngrok_signup
          , {
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
                navigation.navigate('login'); 
              }, 1000);
              
            }
            else {
              alert('User created successfully');
              navigation.navigate('login');
            }
          })
          .catch(err => {
            console.log(err);
          })
      }
    }
  }
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />

      <View style={styles.container1}>
        <View style={styles.s1}>
          <Text style={styles.h1}>Face Recognition</Text>
          <Text style={styles.small}>Attendence App</Text>
        </View>
        <ScrollView style={styles.s2}>
          <Text style={head1}>Create new account</Text>
          <Text style={link}
            onPress={() => navigation.navigate('login')}>Already Register?</Text>
          <Text style={link1}
            onPress={() => navigation.navigate('login')}>Login Here</Text>

          {
            errormsg ? <Text style={errorstyle}>{errormsg}</Text> : null
          }

          <View style={formgroup}>
            <Text style={label}>Name</Text>
            <TextInput style={input} placeholder='Enter your name'
              onChangeText={(text) => setFdata({ ...fdata, name: text })}
              onPressIn={() => setErrorMsg(null)}
            />
            <Text style={label}>D.O.B</Text>
            <TextInput style={input} placeholder='DD/MM/YYYY'
              onChangeText={(text) => setFdata({ ...fdata, dob: text })}
              onPressIn={() => setErrorMsg(null)}
            />
            <Text style={label}>Email</Text>
            <TextInput style={input} placeholder='example@email.com'
              onChangeText={(text) => setFdata({ ...fdata, email: text })}
              onPressIn={() => setErrorMsg(null)}
            />
            <Text style={label}>Password</Text>
            <TextInput style={input} placeholder='Contains strings,number,special char'
              onChangeText={(text) => setFdata({ ...fdata, password: text })}
              secureTextEntry={true}
              onPressIn={() => setErrorMsg(null)}
            />
            <Text style={label}>Confirm Password</Text>
            <TextInput style={input} placeholder='write same password here'
              onChangeText={(text) => setFdata({ ...fdata, cpassword: text })}
              secureTextEntry={true}
              onPressIn={() => setErrorMsg(null)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              Sendtobackend();
            }}>
            <Text style={button1}>Sign Up</Text>
          </TouchableOpacity>
          <View style={styles.fp}>
            {/* <Text style={link}>Forget Password</Text> */}
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default Signup

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

  },
  s1: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: 20,
    height: '20%',
  },
  s2: {
    display: 'flex',
    backgroundColor: '#fff',
    width: '100%',
    height: '80%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },
  h1: {
    fontSize: 30,
    color: '#fff',
  },
  small: {
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