import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LottieView from 'lottie-react-native';

const LoginScreen = ({ navigation }) => {
    const [emailOrMobile, setEmailOrMobile] = useState('');
    const [password, setPassword] = useState('');
    const [emailOrMobileError, setEmailOrMobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLogin = async () => {

        if (!emailOrMobile) {
            setEmailOrMobileError('Please enter your email or mobile number');
            return;
        } else if (emailOrMobile.length != 10) {

            setEmailOrMobileError('Please enter valid email or mobile number');
        } else if (!password) {
            setPasswordError('Please enter your password');
            return;
        }




        try {
            await AsyncStorage.setItem('emailOrMobile', emailOrMobile);
            await AsyncStorage.setItem('password', password);

            navigation.navigate('HomeStack', { screen: 'Home' })

        } catch (error) {
            console.log('Error storing data:', error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"orange"} barStyle="dark-content" />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.animationContainer}>
                    <LottieView
                        source={require('../../Assets/lottifiles/Animation - 1709786071866.json')}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholderTextColor={"white"}
                        style={[styles.input, emailOrMobileError && styles.errorBorder]}
                        placeholder="Email or Mobile Number"
                        onChangeText={text => setEmailOrMobile(text)}
                        value={emailOrMobile}
                        onFocus={() => setEmailOrMobileError('')}
                    />
                    {emailOrMobileError ? <Text style={styles.errorText}>{emailOrMobileError}</Text> : null}

                    <TextInput
                        placeholderTextColor={"white"}
                        style={[styles.input, passwordError && styles.errorBorder, { marginTop: 12, }]}
                        placeholder="Password"
                        onChangeText={text => setPassword(text)}
                        value={password}
                        secureTextEntry
                        onFocus={() => setPasswordError('')}
                    />
                    {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                </View>
                <View >
                    <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} style={{ marginTop: 18, alignItems: "center", }}>
                    <Text>Don't Have Any account ? Register here</Text>
                </TouchableOpacity>
            </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        // justifyContent: "center"
    },
    scrollViewContent: {
        flexGrow: 1,
        // justifyContent: 'center',
    },
    animationContainer: {
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: 'orange',
        marginTop: 40
    },
    animation: {
        width: 250,
        height: 250,
    },
    inputContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        bottom: 22
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,

    },
    errorBorder: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    loginButton: {
        marginTop: 10,
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 5,
        width: '50%',
        alignSelf: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});


export default LoginScreen;
