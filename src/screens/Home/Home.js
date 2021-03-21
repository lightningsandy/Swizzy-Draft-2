import React, {useState, useEffect} from 'react'
import { StyleSheet, Button, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
//icons import
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const Stack = createStackNavigator();


//import Screens
import FeedScreen from './FeedScreen';
import SearchScreen from './SearchScreen';
import PostScreen from './PostScreen';


const Home = ({navigation}) => {


  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts =  async () => {
    await Font.loadAsync({
      Play: require('../../../assets/fonts/Play-Bold.ttf')
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  });

  if (!fontsLoaded) {
    return null;
  }

    return (
        <Stack.Navigator>
        <Stack.Screen 
        name="Feed" 
        component = {FeedScreen} 
        options={{ 
            title: 'SwizzyFIT', 
            headerStyle: {height: 110}, 
            headerTitleStyle: {fontWeight: '800', fontSize: 24, fontFamily: 'Play', color: 'black'},
            progressBackgroundColor: 'black',
            headerLeft: () => (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Post")}
                  style={{marginLeft: 16}}
                >
                <MaterialIcons name="add-box" size={28} color="black" />
               </TouchableOpacity>
            ),
            headerRight: () => (
                <TouchableOpacity
                  style={{marginRight: 16}}
                  onPress={() => navigation.navigate("Search")}
                >
                <FontAwesome name="search" size={24} color="black" />
               </TouchableOpacity>
            )
            }}  />
        <Stack.Screen name="Search" component = {SearchScreen} options={{ headerBackTitle: 'back'}}/>
        <Stack.Screen name="Post" component = {PostScreen} options={{ headerBackTitle: 'back'}}/>
        </Stack.Navigator>
    )
}

export default Home

const styles = StyleSheet.create({})
