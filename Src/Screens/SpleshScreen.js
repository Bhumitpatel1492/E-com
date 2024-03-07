//import liraries
import LottieView from 'lottie-react-native';
import React, { useEffect } from 'react';
import { View, StyleSheet, Image, } from 'react-native';

const SpleshScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('LoginScreen');
        }, 3000);
    }, []);

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