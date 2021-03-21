import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';


const SearchBar = ({term, onTermChange, onTermSubmit}) =>{
    return (
        <View style={styles.backgroundStyles}>
            <FontAwesome name="search" style={styles.iconStyle} />
            <TextInput 
            autoCapitalize= 'none'
            autoCorrect={false}
            placeholder="search" 
            style={styles.inputStyle}
            value = {term}
            onChangeText = {(newTerm) => {onTermChange(newTerm)}} //or onChangeText = {onTermChange}
            onEndEditing = {onTermSubmit}
             />
        </View>
    );
}

const styles = StyleSheet.create({
    backgroundStyles:{
        marginTop: 15,
        backgroundColor: 'white',
        height: 50,
        marginHorizontal:15,
        borderRadius:8,
        marginBottom: 10,
        flexDirection: 'row',
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
    },
    inputStyle:{
        fontSize: 20,
        flex: 1
    },
    iconStyle:{
        fontSize: 30,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});


export default SearchBar;