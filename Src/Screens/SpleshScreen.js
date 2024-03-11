//import liraries
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { View, StyleSheet, Image, } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SpleshScreen = ({ navigation }) => {
    useEffect(() => {
        const fetchData = async () => {
            try {
                const emailOrMobile = await AsyncStorage.getItem('emailOrMobile');
                const password = await AsyncStorage.getItem('password');

                if (emailOrMobile && password) {
                    setTimeout(() => {
                        navigation.navigate('HomeScreen');
                    }, 3000);
                } else {
                    setTimeout(() => {
                        navigation.navigate('LoginScreen');
                    }, 3000);
                }
            } catch (error) {
                console.error('AsyncStorage Error:', error);
            }
        };

        fetchData();
    }, [navigation]);

    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../Assets/lottifiles/Animation - 1709786542570.json')}
                autoPlay
                loop
                style={styles.animation}
            />
        </View>
    );
};




//make this component available to the app
export default SpleshScreen;

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    animation: {
        width: 250,
        height: 250,
    }
});