import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

import { SimpleLineIcons } from '@expo/vector-icons';

const PostCard = (props) => {

    return (

      // header
        <View style={{marginTop: 16}}>
        <View style={[styles.row, styles.padding]}>
      <View style={styles.row}>
        <Image style={styles.avatar} source={{ uri: props.proPic }} />
        <Text style={styles.text}>{props.userName}</Text>
      </View>
    </View>


        <Image
          resizeMode="contain"
          style={{
            backgroundColor: "black",
            width: "100%",
            aspectRatio: 1
          }}
          source={{ uri: props.postUrl }}
        />
         <View style={styles.padding}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View style={{flexDirection: 'column', flex: 1}}>
      <Text style={styles.text}>{props.desp}</Text>
      </View>
      <SimpleLineIcons style={{ marginRight: 8, marginLeft: 10}} name='like' size={26} color="black" />
      </View>
    </View>
      </View>
    )
}



export default PostCard

const styles = StyleSheet.create({
    text: { fontWeight: "600", marginTop: 4, color: 'black' },
    subtitle: {
      opacity: 0.8,
      color: 'black'
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
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
      borderRadius: 36 / 2,
      width: 36,
      height: 36,
      resizeMode: "cover",
      marginRight: 12
    }
})
