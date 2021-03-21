import React, {useState} from 'react';
import {Text, StyleSheet, SafeAreaView, View, ScrollView} from 'react-native';
import SearchBar from '../../components/SearchBar';

import SearchResultCard from '../../components/SearchResultCard';


const SearchScreen = () =>{


    const [term,setTerm] = useState("");

    
    return (
       <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
       <View style={{flex: 1, backgroundColor: 'white'}}>
       <SearchBar />
       <ScrollView>
       <SearchResultCard />
       <SearchResultCard />
       <SearchResultCard />
       </ScrollView>
       </View>
       </SafeAreaView>
            
    );
}

const styles = StyleSheet.create({});


export default SearchScreen;