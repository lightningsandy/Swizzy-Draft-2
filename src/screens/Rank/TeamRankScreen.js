import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'


import RankingCard from '../../components/RankingCard';


const TeamRankScreen = () => {
    return (
        <View style={{flex: 1, backgroundColor: 'white'}}>
        <View style={{backgroundColor: 'white', padding: 20, marginTop: 0, borderBottomWidth: 1, borderRadius: 8,flexDirection: 'row'}}>
           <Text style={styles.number}>Rank</Text>
            <Text style={styles.title}>Name</Text>
            <Text style={styles.score}>Points</Text>
        </View>
        <ScrollView>
           <RankingCard 
           number= {1}
           name = 'santhosh'
           points = {12321}
           />
           <RankingCard 
           number= {2}
           name = 'okash'
           points = {12331}/>
           <RankingCard 
           number= {3}
           name = 'naveen'
           points = {121321}
           />
        </ScrollView>
        </View>
    )
}

export default TeamRankScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: "black",
        flex: 4
       
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
