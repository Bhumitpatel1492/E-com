//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

// create a component
const CustomInput = ({
    placeholderTextColor,
    placeholder,
    onChangeText,
    value,
    onFocus,
    style,
    showtext,
    erromessage,
    showtitle,
    title,
    showerror

}) => {
    return (
        <View style={styles.container}>
            {
                showtitle ? (
                    <Text style={styles.errorText}>{title}</Text>
                ) : null

            }
            <TextInput
                placeholderTextColor={placeholderTextColor}
                style={style}
                placeholder={placeholder}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry
                onFocus={onFocus}
            />
            {
                showerror ? (
                    <Text style={styles.errorText}>{erromessage}</Text>
                ) : null

            }
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
export default CustomInput;
