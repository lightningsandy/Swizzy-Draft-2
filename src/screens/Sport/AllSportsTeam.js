import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import SportTeamCard from '../../components/SportTeamCard';

const AllSportsTeam = () => {
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}} showsVerticalScrollIndicator = {false}>
            <SportTeamCard 
            type="All"
            proPic="https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1602&q=80"
            teamName="whales Footballers"
            desp="We have never been defeated"
            image="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
             />
        </ScrollView>
    )
}

export default AllSportsTeam

const styles = StyleSheet.create({})
