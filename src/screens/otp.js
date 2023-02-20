import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Otp = ({navigation,route}) => {
    const userdata = route.params.userData;
    // console.log(route.params.userData.otp);
    console.log("from otp page",userdata.otp);
    // console.log("from otp page",userdata[0]?.otp); //not working 
  return (
    <View>
      <Text>otp</Text>
    </View>
  )
}

export default Otp

const styles = StyleSheet.create({})