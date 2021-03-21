import React from "react";
import { View, Text } from "react-native";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();


//import Screens
import Home from './Home/Home';
import ProfileScreen from './Profile/ProfileScreen';
import SuggestionScreen from './Suggest/SuggestionScreen';
import Rank from './Rank/Rank';
import SportsScreen from './Sport/Sport';


//icons
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';


const AppNavigator = () => {
  return (
    <Tab.Navigator
    initialRouteName="Feed"
    activeColor="white"
    barStyle={{ backgroundColor: 'black'}}
    shifting={true}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Suggestions"
      component={SuggestionScreen}
      options={{
        tabBarLabel: 'Suggest',
        tabBarIcon: ({ color }) => (
          <Ionicons name="bulb-sharp" size={24} color={color} />
        ),
      }}
    />
     <Tab.Screen
      name="Game"
      component={SportsScreen}
      options={{
        tabBarLabel: 'Sports',
        tabBarIcon: ({ color }) => (
          <MaterialIcons name="sports-volleyball" size={24} color={color} />
        ),
      }}
    />
     <Tab.Screen
      name="Ranking"
      component={Rank}
      options={{
        tabBarLabel: 'Rank',
        tabBarIcon: ({ color }) => (
          <Ionicons name="ios-medal-sharp" size={24} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default AppNavigator;