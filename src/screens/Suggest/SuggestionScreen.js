import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import SuggestionCard from '../../components/SuggestionCard';

const Suggestion = () => {
    return (
        <ScrollView style={{flex: 1, backgroundColor: 'white'}} showsVerticalScrollIndicator = {false}>
            <SuggestionCard 
                text="Weather is bright today. Maybe it's time for a jogging"
                image="https://images.unsplash.com/photo-1603455778956-d71832eafa4e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
            />
            <SuggestionCard 
                text="Seem like your calendar is free for few hours. Why don't you go exercise"
                image="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
            />
            <SuggestionCard 
                text="It's been long time you did some exercise. Now is the time"
                image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
            />
        </ScrollView>
    )
}

const SuggestionScreen = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="suggestions" component = {Suggestion} />
        </Stack.Navigator>
    )
}

export default SuggestionScreen;

const styles = StyleSheet.create({})
