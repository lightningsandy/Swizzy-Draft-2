import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SuggestionCard = (props) => {

    return (
        <View style={{flex: 1, width: windowWidth - 26, backgroundColor: 'rgb(241, 243, 248)', alignSelf: 'center', borderRadius: 8, marginTop: 10, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        
        elevation: 2,}}>
            <Text style={{fontSize: 20, fontWeight: '600', flex: 1, padding: 20}}>{props.text}</Text>
            <Image 
                style={{flex: 2, height: 200, borderBottomRightRadius: 8, borderBottomLeftRadius: 8}}
                source={{uri: props.image}}
            />
        </View>
    )
}

export default SuggestionCard

