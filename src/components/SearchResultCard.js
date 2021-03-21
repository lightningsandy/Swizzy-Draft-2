import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { Button as PaperButton } from 'react-native-paper';


const { height, width } = Dimensions.get('screen');

const SearchResultCard = () => {
    return (
        <View style={{padding: 20}}>
         <View style={styles.row}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.avatar} source={{ uri: 'https://avatars.githubusercontent.com/u/67680177?s=460&u=912ed1b876ff0176ef9b182d772a30cac02109f6&v=4' }} />
           <Text style={styles.text}>Sandy</Text>
          </View>
          <PaperButton 
            mode="contained" 
            dark = {true}
            style={styles.registerButton}
            onPress = {() => {
                    navigation.navigate("Follow")
            }}
            >
            Follow
            </PaperButton>
         </View>
        </View>
    )
}

export default SearchResultCard

const styles = StyleSheet.create({
    text: { fontWeight: "700", color: 'black', fontSize: 24 },
    row: {
      flexDirection: "row",
      justifyContent: 'space-between',
      alignItems: "center"
    },
    padding: {
      padding: 12
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
    },
    registerButton: {
        width: 100,
        backgroundColor: '#4095EF',
    }
})
