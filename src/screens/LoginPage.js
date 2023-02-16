import { StyleSheet, Text, View, Image, TextInput, SafeAreaView,ScrollView } from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.png'
import mainlogo from '../../assets/mainlogo.png'
import { button1 } from '../common/button'
import { formgroup, head1, head2, input, label, link, link1 } from '../common/formcss'

const Login = ({navigation}) => {
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
          <Text style={head1}>Login</Text>
          <Text style={head2}>Sign in to continue</Text>
          <View style={formgroup}>
            <Text style={label}>Email</Text>
            <TextInput style={input} placeholder='example@email.com'/>
            <Text style={label}>Password</Text>
            <TextInput style={input} placeholder='Contains strings,number,special char' />
          </View>
          <Text style={button1}>Log In</Text>
          <View style={styles.fp}>
            <Text style={link}>Forget Password</Text>
          </View>
          <Text style={link}
          onPress={() => navigation.navigate('signup')}>Don't have an account?</Text>
          <Text style={link1}
          onPress={() => navigation.navigate('signup')}>Sign Up</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Login

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