import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

import SportTeamCard from '../../components/SportTeamCard';

const MySportsTeam = () => {
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}} showsVerticalScrollIndicator = {false}>
            <SportTeamCard 
            type="Mine"
            proPic="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
            teamName="Sharks Footballers"
            desp="We're the champions of Zürich. Stay away from us"
            image="https://images.unsplash.com/photo-1574602904316-f84f62477265?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
             />
        </ScrollView>
    )
}

export default MySportsTeam

const styles = StyleSheet.create({})
