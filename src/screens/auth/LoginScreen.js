import React, {useState} from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback, ImageBackground, Dimensions, Keyboard } from 'react-native';
import { TextInput } from 'react-native-paper';
import  { Auth }  from '../../constants/images';
import { Button as PaperButton, HelperText } from 'react-native-paper';
// import {AuthContext} from '../../App';



const { width, height } = Dimensions.get('screen');


const Login = ({ navigation }) => {

    const [userId,setUserId] = useState("");
    const [error, setError] = useState("");

    // const { signUp } = React.useContext(AuthContext);


    


    const onSignUp = () => {
      

    }
    

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
         <View style={styles.container}>
         <ImageBackground
            source={Auth}
            style={{ flex: 1, height, width, position: 'absolute' }}
            />

            <Text style={styles.headingStyle}>
                Login In
            </Text>
            <View style={{flex: 1}}>
            <TextInput 
                style={styles.inputBox}
                mode = "outlined"
                label="User ID"
                value={userId}
                onChangeText = {(userId) => setUserId(userId)}
                error = {false}
            />
            <HelperText type="error" visible={error === "" ? false : true}>
            {error}
            </HelperText>
            </View>
            
            <View style={{flex: 2}}>
            <PaperButton 
            mode="contained" 
            dark = {true}
            style={styles.registerButton}
            onPress = {() => onSignUp()}
            >
            Login In
            </PaperButton>
            </View>
           
            <View style={{flex: 1, justifyContent: 'space-between'}}>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
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
    buttonText: {
        fontSize: 17,
        color: 'blue',
        marginTop: 20,
        marginRight: width * 0.1
    },
    loginPara: {
        color: 'black'
    },
    registerButton: {
        width: width * 0.8, 
        backgroundColor: 'black'
    },
    headingStyle: {
        fontSize: 48,
        fontWeight: '600',
        color: 'white',
        marginTop: height * 0.17,
        alignSelf: 'flex-start',
        flex: 2,
        marginLeft: 20
    }
})

export default Login


