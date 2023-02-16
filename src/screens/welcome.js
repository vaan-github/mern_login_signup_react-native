import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.png'
import mainlogo from '../../assets/mainlogo.png'
import { button1 } from '../common/button'
const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.patternbg} source={pattern} />
      <View style={styles.container1}>
        <Image style={styles.logo} source={mainlogo} />
        <Text style={button1}
          onPress={() => navigation.navigate('login')}>Log In</Text>
        <Text style={button1}
        onPress={() => navigation.navigate('signup')}>Sign Up</Text>
      </View>
    </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },
  patternbg: {
    width: '100%',
    height: '100%',
    top: 0,
    position: 'absolute',
    zIndex: -1,
  },
  head: {
    fontSize: 30,
    color: '#fff',
  },
  container1: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    width: '40%',
    height: '40%',
    resizeMode: 'contain',
  },
})