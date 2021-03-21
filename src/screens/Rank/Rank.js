import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Tab = createMaterialTopTabNavigator();

//screen imports
import IndiviRankScreen from './IndiviRankScreen';
import TeamRankScreen from './TeamRankScreen';

const Rank = () => {
    return (
     <Tab.Navigator
     tabBarPosition = "bottom"
     >
        <Tab.Screen name="Individual" component={IndiviRankScreen} />
        <Tab.Screen name="Team" component={TeamRankScreen} />
      </Tab.Navigator>
    )
}

const RankScreen = () => {
    return (
   <Stack.Navigator>
       <Stack.Screen name="ranking" component = {Rank} />
   </Stack.Navigator>
    )
}



export default RankScreen

const styles = StyleSheet.create({})
