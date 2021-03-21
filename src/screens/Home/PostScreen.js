import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, TouchableOpacity, StyleSheet, Dimensions, TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { TextInput } from 'react-native-paper';
import { Button as PaperButton, HelperText } from 'react-native-paper';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');

export default function PostScreen({navigation}) {
  const [image, setImage] = useState(null);
  const [heading,setHeading] = useState("");
  const [desp, setDesp] = useState("");

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
    pickImage();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.cancelled) {
      navigation.navigate("Feed");
    }

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  if(image) {
    return (
          <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-evenly'}}>
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
       <TextInput 
                style={styles.inputBox}
                mode = "flat"
                label="Heading"
                value={heading}
                onChangeText = {(heading) => setHeading(heading)}
            />
             <TextInput 
                style={styles.inputBox}
                mode = "flat"
                label="Description"
                value={desp}
                onChangeText = {(desp) => setDesp(desp)}
            />
            <PaperButton 
            mode="contained" 
            dark = {true}
            style={styles.registerButton}
            onPress = {() => onSignUp()}
            >
            Post
            </PaperButton>

           
      </View>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
    )
  }

  return null;
}



const styles = StyleSheet.create({
  container: {
      flex: 1,
      alignItems: 'center'
  },
  inputBox: {
      width: width * 0.9,
      padding: 10,
      fontSize: 16,
  },
  registerButton: {
    width: width * 0.8,
    backgroundColor: 'black',
  }
    
})
