import { StyleSheet, Text, View, Image, TextInput, SafeAreaView } from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.png'
import mainlogo from '../../assets/mainlogo.png'
import { button1 } from '../common/button'
import { formgroup, head1, head2, input, label, link, link1 } from '../common/formcss'

const Signup = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />

      <View style={styles.container1}>
       
        <View style={styles.s2}>
          <Text style={head1}>Create new account</Text>
          <Text style={link}>Already Register?</Text>
          <Text style={link1}>Login Here</Text>
     
          <View style={formgroup}>
            <Text style={label}>Name</Text>
            <TextInput style={input} placeholder='Enter your name'/>
            <Text style={label}>D.O.B</Text>
            <TextInput style={input} placeholder='DD/MM/YYYY' />
            <Text style={label}>Email</Text>
            <TextInput style={input} placeholder='example@email.com'/>
            <Text style={label}>Password</Text>
            <TextInput style={input} placeholder='Contains strings,number,special char'/>
            <Text style={label}>Confirm Password</Text>
            <TextInput style={input} placeholder='write same password here' />
          </View>
          <Text style={button1}>Sign Up</Text>
          <View style={styles.fp}>
            {/* <Text style={link}>Forget Password</Text> */}
          </View>
        </View>
      </View>
    </SafeAreaView>
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