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
            <TouchableOpacity style={buttonstyle ? buttonstyle : styles.btnStyle} onPress={onPress}>
                <Text style={textstyle ? textstyle : styles.btntxt}>{title}</Text>
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
    btnStyle: {
        height: 30,
        width: '60%',
        backgroundColor: 'red'
    },
    btntxt: {
        fontSize: 15,
        fontWeight: "600",
        color: '#fff'
    }
});

//make this component available to the app
export default CustomButtom;
