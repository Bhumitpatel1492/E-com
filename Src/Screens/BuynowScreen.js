//import liraries
import LottieView from 'lottie-react-native';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BuynowScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
                <LottieView
                    source={require('../../Assets/lottifiles/Animation - 1709803588957.json')}
                    autoPlay
                    loop
                    style={styles.animation}
                />
            </View>
            <View style={{ alignItems: "center" }}>
                <Text style={{ fontSize: 22, color: "green", fontWeight: "800" }}>Your Order Is Conform</Text>
            </View>

            <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('HomeStack', { screen: 'Home' })} >
                <Text style={styles.loginButtonText}>Continue Shopping</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',

    },
    animation: {
        width: 250,
        height: 250,
    },
    loginButton: {
        marginTop: 50,
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

export default BuynowScreen;
