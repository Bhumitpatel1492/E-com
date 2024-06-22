//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

// create a component
const CustomButtom = ({
    buttonstyle,
    onPress,
    textstyle,
    title
}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={buttonstyle} onPress={onPress}>
                <Text style={textstyle}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
});

//make this component available to the app
export default CustomButtom;
