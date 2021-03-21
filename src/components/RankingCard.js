import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const RankingCard = (props) => {

    const getColor = () => {
        if(props.number === 1){
            return '#FFD233';
        }
        else if(props.number === 2){
            return '#E2E2E2';
        }
        else if(props.number === 3){
            return '#D2941A';
        }
        else {
            return 'rgb(241, 243, 248)';
        }
    }

    const getMargin = () => {
        if(props.number === 1 || props.number === 2 || props.number === 3 ){
            return 5;
        }
        else {
            return 0;
        }
    }

    return (
        
        <View style={{
        backgroundColor: getColor(), 
        padding: 20, 
        margin: getMargin(), 
        borderBottomWidth: props.number === 1 || props.number === 2 || props.number === 3 ? 0 : 1, 
        borderRadius: 8,
        flexDirection: 'row',
        }}>
           <Text style={styles.number}>{props.number}</Text>
            <Text style={styles.title}>{props.name}</Text>
            <Text style={styles.score}>{props.points}</Text>
        </View>
       
    )
}

export default RankingCard

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: "black",
        flex: 4,
       
    },
    score: {
        flex: 3,
        fontSize: 20,
        fontWeight: '600',
        color: "black",
    },
    number: {
        flex: 2,
        fontSize: 20,
        fontWeight: '600',
        color: "black",

    }
})


