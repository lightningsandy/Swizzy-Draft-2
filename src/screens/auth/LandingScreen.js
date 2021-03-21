import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, ImageBackground, Dimensions, StatusBar } from 'react-native'
import  { Onboarding }  from '../../constants/images';
import * as Font from 'expo-font';
import { Button as PaperButton } from 'react-native-paper';


const { height, width } = Dimensions.get('screen');

const Landing = ({ navigation }) => {
        

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
         <View style={{flex: 1}}>
           <StatusBar barStyle="light-content" />
            <ImageBackground
            source={Onboarding}
            style={{ flex: 1, height, width }}
            />
            <Text style={styles.headingStyle}>
                SwizzyFIT
            </Text>

            <PaperButton 
            mode="contained" 
            dark = {true}
            style={{...styles.registerButton, backgroundColor: 'black',  marginBottom: height * 0.1}}
            onPress = {() => {
                    navigation.navigate("Login")
            }}
            >
            Login
            </PaperButton>
        </View>
    )
}

export default Landing

const styles = StyleSheet.create({
    headingStyle: {
        fontSize: 48,
        color: 'white',
        fontFamily: 'Play',
        position: 'absolute',
        top: height * 0.22,
        left: width/2 - 110,
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    registerButton: {
        width: width * 0.8, 
        marginLeft: width / 2 - 150
    }
})
