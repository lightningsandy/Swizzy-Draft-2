import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const SportTeamCard = (props) => {

    return (
        <View style={{flex: 1, width: windowWidth - 26, backgroundColor: 'rgb(241, 243, 248)', alignSelf: 'center', borderRadius: 8, marginTop: 10, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,}}>
          <View style={{flexDirection: 'row', alignItems: 'center', padding: 12}}>
          <Image style={styles.avatar} source={{ uri: props.proPic }} />
          <View style={{flexDirection: 'column'}}>
          <Text style={styles.text}>{props.teamName}</Text>
           <Text style={{}}>11 Members</Text>
          </View>
          </View>
            <Text style={{fontSize: 20, fontWeight: '600', flex: 1, padding: 20}}>{props.desp}</Text>
            {props.type === "All" && <PaperButton 
            mode="contained" 
            dark = {true}
            style={styles.registerButton}
            onPress = {() => {
                    navigation.navigate("Login")
            }}
            >
            Friendly Match
            </PaperButton>
            }
            <Image 
                style={{flex: 2, height: 150, borderBottomRightRadius: 8, borderBottomLeftRadius: 8}}
                source={{uri: props.image}}
            />
        </View>
    )
}


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
        width: windowWidth * 0.5, 
        marginLeft: 20,
        backgroundColor: 'black',  
        marginBottom: 10
    }
})


export default SportTeamCard

