import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../components/CustomInput';
import CustomButtom from '../components/CustomButton';

const RegisterScreen = ({ navigation }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [emailOrMobileError, setEmailOrMobileError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [firstNameerror, setfirstnameerror] = useState('')
    const [lastNameerror, setlastnameerror] = useState('')
    const [cityerror, setcityerror] = useState('')
    const [emailError, setemailError] = useState('')

    const handleRegister = async () => {

        if (!firstName) {
            setfirstnameerror('Please Enter First Name')
        } else if (!lastName) {
            setlastnameerror('Please Enter LastName')
        } else if (!mobileNumber) {
            setEmailOrMobileError('Please Enter Mobile Number')
        }
        else if (mobileNumber.length != 10) {
            setEmailOrMobileError('Please Enter Valid Mobilenumer')
        } else if (!email) {
            setemailError('Please Enter Email')
        } else if (!password) {
            setPasswordError('Please Enter Password')
        } else if (!city) {
            setcityerror("Please Enter City Name")
        } else {
            try {

                await AsyncStorage.setItem('firstName', firstName);
                await AsyncStorage.setItem('lastName', lastName);
                await AsyncStorage.setItem('email', email);
                await AsyncStorage.setItem('city', city);
                await AsyncStorage.setItem('emailOrMobile', mobileNumber);
                await AsyncStorage.setItem('password', password);


                // Alert.alert('Registration successful');
                navigation.navigate('HomeStack', { screen: 'Home' })
            } catch (error) {
                console.error('Error storing data:', error);
                Alert.alert('Registration failed. Please try again.');
            }
        }



    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                <View style={styles.animationContainer}>
                    <LottieView
                        source={require('../../Assets/lottifiles/Animation - 1709786022004.json')}
                        autoPlay
                        loop
                        style={styles.animation}
                    />
                </View>
                <View style={{ padding: 10, justifyContent: "center", alignItems: "center", bottom: 12 }}>
                    <Text style={{ fontSize: 18, fontWeight: '600', color: '#ffffff', textDecorationLine: "underline" }}>
                        Register Here</Text>
                </View>
                <View style={styles.inputContainer}>
                    <CustomInput
                        placeholderTextColor={"white"}
                        style={styles.input}
                        placeholder="First Name"
                        onChangeText={text => setFirstName(text)}
                        value={firstName}
                        showerror
                        erromessage={firstNameerror}

                    />

                    <CustomInput
                        placeholderTextColor={"white"}
                        style={styles.input}
                        placeholder="Last Name"
                        onChangeText={text => setLastName(text)}
                        value={lastName}
                        showerror
                        erromessage={lastNameerror}

                    />

                    <CustomInput
                        placeholderTextColor={"white"}
                        style={styles.input}
                        placeholder="Mobile Number"
                        onChangeText={text => setMobileNumber(text)}
                        value={mobileNumber}
                        keyboardType="numeric"
                        showerror
                        erromessage={emailOrMobileError}
                    />

                    <CustomInput
                        placeholderTextColor={"white"}
                        style={styles.input}
                        placeholder="Email"
                        onChangeText={text => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                        showerror
                        erromessage={emailError}
                    />

                    <CustomInput
                        placeholderTextColor={"white"}
                        style={styles.input}
                        placeholder="Password"
                        onChangeText={text => setPassword(text)}
                        value={password}
                        secureTextEntry={true}
                        showerror
                        erromessage={passwordError}
                    />

                    <CustomInput
                        placeholderTextColor={"white"}
                        style={styles.input}
                        placeholder="City"
                        onChangeText={text => setCity(text)}
                        value={city}
                        showerror
                        erromessage={cityerror}
                    />

                </View>


                <View style={{ marginBottom: 30 }} >
                    {/* <TouchableOpacity style={styles.loginButton} onPress={handleRegister}>
                        <Text style={styles.loginButtonText}>Register</Text>
                    </TouchableOpacity> */}
                    <CustomButtom
                        buttonstyle={styles.loginButton}
                        textstyle={styles.loginButtonText}
                        title={'Register'}
                        onPress={() => handleRegister()}
                    />
                </View>
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
        // backgroundColor: 'green',
        paddingVertical: 20,
        bottom: 22,
        alignItems: "center"
    },
    input: {
        // width: '100%',
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'white',
        padding: 10,
        borderRadius: 5,
        width: 350
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
    errorText: {
        color: 'red',
        marginBottom: 10,
    }
});

export default RegisterScreen;
