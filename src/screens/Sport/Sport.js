import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

//screen imports
import MySportsTeam from './MySportsTeam';
import AllSportsTeam from './AllSportsTeam';

const Sport = () => {
    return (
     <Tab.Navigator
     tabBarPosition = "bottom"
     >
        <Tab.Screen name="MyTeam" component={MySportsTeam} />
        <Tab.Screen name="AllTeam" component={AllSportsTeam} />
      </Tab.Navigator>
    )
}

const SportScreen = () => {
    return (
   <Stack.Navigator>
       <Stack.Screen name="Sport" component = {Sport} />
   </Stack.Navigator>
    )
}



export default SportScreen

const styles = StyleSheet.create({})
