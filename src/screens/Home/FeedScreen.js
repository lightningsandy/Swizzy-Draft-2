import React, {useState, useCallback} from 'react';
import { RefreshControl, View, ScrollView, StyleSheet, LayoutAnimation, StatusBar } from 'react-native';
import PostCard from '../../components/PostCard';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const FeedScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  LayoutAnimation.easeInEaseOut();

  return (
    <View style={styles.container}>
    <StatusBar barStyle="dark-content" />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        showsVerticalScrollIndicator = {false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <PostCard 
          postUrl = "https://images.unsplash.com/photo-1581803876588-621106e7377f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80"
          userName = "Vijay"
          proPic = "https://avatars.githubusercontent.com/u/65803840?s=400&u=adb98de2e40c69c183e1d440c48dd7a476bea876&v=4"
          desp = "Went for cycling with my friends today.. someone wanna join next time ?"
        />
        <PostCard 
        postUrl = "https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
          userName = "Akash"
          proPic = "https://avatars.githubusercontent.com/u/32677774?s=400&u=ac3185d2c164eec4709c1746ee680e489fe5d8c8&v=4"
          desp = "Best salad I ever had. Felt like I lost 5kgs right away"
         />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FeedScreen;