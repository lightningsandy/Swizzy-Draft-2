import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import  { bigone }  from '../../constants/images';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

import FitStats from '../../components/FitStats';

const Profile = () => {
    return (
        <View style={{flex: 1}}>
           <View style={{flex: 1, marginTop: 20}}>
           <View style={{flexDirection: 'row', alignItems: 'center', padding: 12}}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars.githubusercontent.com/u/32677774?s=400&u=ac3185d2c164eec4709c1746ee680e489fe5d8c8&v=4' }} />
          <View style={{flexDirection: 'column'}}>
          <Text style={styles.text}>Naveen Kumar</Text>
           <Text style={{}}>Status: Fat</Text>
          </View>
          </View>
           </View>
            <View style={{flex: 2, backgroundColor: 'rgb(221, 213, 228)', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
            <Image 
                style={{width: 200, height: 200, resizeMode: 'contain'}}
                source={bigone}
            />
            </View>
            <View style={{flex: 1, flexDirection: 'row', padding: 10, justifyContent: 'space-between'}}>
              <View style={{flex: 2, backgroundColor: 'rgb(221, 213, 228)', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
              <Text style={styles.text}>Points: 5000</Text>
                <Text style={styles.text}>Rank: 25</Text>
              </View>
                <View style={{flex: 2, backgroundColor: 'rgb(221, 213, 228)', margin: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 20}}>
                <Text style={styles.text}>Followers: 5</Text>
                <Text style={styles.text}>Following: 10</Text>
                </View>

            </View>
        </View>
    )
}

const ProfileScreen = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Profile" component = {Profile} />
        </Stack.Navigator>
    )
}





export default ProfileScreen;

const styles = StyleSheet.create({
    text: { fontWeight: "700", color: 'black', fontSize: 22 },
    row: {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center"
    },
    avatar: {
      aspectRatio: 1,
      backgroundColor: "#D8D8D8",
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: "#979797",
      borderRadius: 56 / 2,
      width: 56,
      height: 56,
      resizeMode: "cover",
      marginRight: 12
    }
})
