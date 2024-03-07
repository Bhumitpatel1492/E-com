import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/dist/Feather';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';

const SubHeader = () => {
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#88dae0', '#98e1d6', '#9ee4d4']} style={styles.container}>
            <Feather name="map-pin" size={16} color="#000000" />
            <Text style={styles.deliver}>Deliver To Bhumit - Ahmedabad 380012</Text>
            <SimpleLineIcons name="arrow-down" size={10} color="#000000" />
        </LinearGradient>
    );
};



export default SubHeader;


const styles = StyleSheet.create({
    container: {
        padding: 12,
        flexDirection: "row",
        alignItems: "center"
    },
    deliver: {
        fontSize: 13,
        color: "#2c4341",
        paddingHorizontal: 6
    }
});