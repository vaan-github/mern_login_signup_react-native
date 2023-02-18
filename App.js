import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './src/screens/welcome';
import Login from './src/screens/LoginPage';
import Signup from './src/screens/SignupPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/screens/HomePage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="login" component={Login}
          options={
            { headerShown: false }
          } />
        <Stack.Screen name="signup" component={Signup}
          options={
            { headerShown: false }
          } />
          <Stack.Screen name="homepage" component={HomePage}
          options={
            { headerShown: false }
          } />
      </Stack.Navigator>
    </NavigationContainer>

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
