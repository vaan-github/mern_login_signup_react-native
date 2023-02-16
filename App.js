import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/welcome';
import Login from './src/screens/LoginPage';
import Signup from './src/screens/SignupPage';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <Welcome />  */}
      {/* <Login /> */}
      <Signup />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
