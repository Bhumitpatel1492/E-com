
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Feather from 'react-native-vector-icons/dist/Feather';
import colors from '../Utils/Colours';


const Header = () => {
    return (
        <View>
            <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#88dae0', '#98e1d6', '#9ee4d4']} style={styles.container}>
                <View style={styles.inputBox}>
                    <View style={styles.row}  >
                        <Ionicons name="search" size={22} color="#1f1f1f" />
                        <TextInput placeholder='Search Amazon.in' style={styles.textInput} />
                    </View>
                    <View style={{ justifyContent: "center" }}>
                        <AntDesign name="scan1" size={22} color="#909594" />
                    </View>

                </View>
                <Feather name="mic" size={20} color="#000000" />
            </LinearGradient>
        </View>
    );
};




export default Header;


const styles = StyleSheet.create({
    container: {
        padding: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-between'
    },
    inputBox: {
        flexDirection: "row",
        alignContent: 'center',
        borderWidth: 1,
        borderColor: "#a1bcc0",
        borderRadius: 8,
        backgroundColor: "#FFFFFF",
        width: '90%',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        elevation: 5
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textInput: {
        padding: 8,
    }
});