import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { button1 } from '../common/button'
import { head1 } from '../common/formcss'
import { formgroup } from '../common/formcss'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomePage = ({navigation}) => {
  return (
    <SafeAreaView style={formgroup}>
      <Text style={head1}>HomePage</Text>
      <Text style={button1}
      onPress={()=>navigation.navigate('login')}>LogOut</Text>
    </SafeAreaView>
  )
}

export default HomePage

const styles = StyleSheet.create({})