import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

//import screens
import LandingScreen from './src/screens/auth/LandingScreen';
import LoginScreen from './src/screens/auth/LoginScreen';
import AppNavigator from './src/screens/AppNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Landing" component = {LandingScreen} options={{ headerShown: false}} />
      <Stack.Screen name="Login" component = {LoginScreen} options={{ headerShown: false}} />
      </Stack.Navigator>
      {/* <Stack.Navigator>
      <Stack.Screen name="AppNavigator" component = {AppNavigator} options={{ headerShown: false}} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
