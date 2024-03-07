//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const AddtoCartScreen = () => {
    const cartItems = useSelector(state => state.cart.items);
    console.log('cart------>', cartItems);
    return (
        <View style={styles.container}>
            <Text>AddtoCartScreen</Text>

        </View>
    );
};


export default AddtoCartScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#2c3e50',
    },
});