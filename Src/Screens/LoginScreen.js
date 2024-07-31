import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import auth from '@react-native-firebase/auth';
import LottieView from 'lottie-react-native';
import colors from '../Utils/Colours';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

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
            setEmailOrMobileError('Please enter a valid email or mobile number');
            return;
        } else if (!password) {
            setPasswordError('Please enter your password');
            return;
        }

        try {
            if (emailOrMobile.includes('@')) {
                // Email login
                await auth().signInWithEmailAndPassword(emailOrMobile, password);
            } else {
                // Phone login
                const confirmation = await auth().signInWithPhoneNumber(emailOrMobile);
                // You may need to handle the confirmation code input here
                // For simplicity, we are not handling that in this code snippet
            }

            navigation.navigate('HomeScreen');
        } catch (error) {
            console.log('Error logging in:', error);
            if (error.code === 'auth/invalid-email') {
                setEmailOrMobileError('Invalid email address');
            } else if (error.code === 'auth/wrong-password') {
                setPasswordError('Incorrect password');
            } else {
                setEmailOrMobileError(error.message);
            }
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
                <View style={{ padding: 10, justifyContent: "center", alignItems: "center", bottom: 12 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#ffffff', textDecorationLine: "underline" }}>Login Here</Text>
                </View>
                <View style={styles.inputContainer}>
                    <CustomInput
                        placeholderTextColor={"white"}
                        style={[styles.input, emailOrMobileError && styles.errorBorder]}
                        placeholder="Email or Mobile Number"
                        onChangeText={text => setEmailOrMobile(text)}
                        value={emailOrMobile}
                        onFocus={() => setEmailOrMobileError('')}
                        showerror
                        erromessage={emailOrMobileError}
                    />
                    <CustomInput
                        placeholderTextColor={"white"}
                        style={[styles.input, passwordError && styles.errorBorder, { marginTop: 12 }]}
                        placeholder="Password"
                        onChangeText={text => setPassword(text)}
                        value={password}
                        secureTextEntry
                        onFocus={() => setPasswordError('')}
                        showerror
                        erromessage={passwordError}
                    />
                </View>
                <View>
                    <CustomButton
                        buttonstyle={styles.loginButton}
                        textstyle={styles.loginButtonText}
                        title={'Login'}
                        onPress={handleLogin}
                    />
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')} style={{ marginTop: 18, alignItems: "center" }}>
                    <Text>Don't Have Any account? Register here</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    animationContainer: {
        alignItems: "center",
        marginBottom: 20,
        backgroundColor: 'orange',
        marginTop: 40,
    },
    animation: {
        width: 250,
        height: 250,
    },
    inputContainer: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        bottom: 22,
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
