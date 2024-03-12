
import React, { Component, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Images from '../../Utils/Images';
import { useNavigation } from '@react-navigation/native';

let name = ''
const ProfileScreen = () => {
    const navigation = useNavigation()
    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('firstName')
            if (value !== null) {
                name = value
            }
        } catch (e) {
            // error reading value
        }
    }
    return (
        <View style={style.container}>
            <View style={style.view}>
                <Text style={style.profiletxt}>Profile</Text>
                <TouchableOpacity style={style.settingbtn}>
                    <Image source={Images.setting_icon} style={{ width: 24, height: 24 }} />
                </TouchableOpacity>
            </View>
            <Image source={Images.profile_icon} style={style.profileimg} />
            <Text style={style.username}>{name}</Text>
            <TouchableOpacity style={[style.addressbtn, { marginTop: 20 }]} onPress={() => navigation.navigate('MyAddress')}>
                <Text style={{}}>My Address</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.addressbtn}>
                <Text style={{}}>My Order</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.addressbtn}>
                <Text style={{}}>Offers</Text>
            </TouchableOpacity>
        </View>
    );
};

export default ProfileScreen;


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        width: '100%',
        height: 70,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    },
    profiletxt: {
        fontWeight: "600",
        fontSize: 18,
        marginLeft: 15
    },
    settingbtn: {
        width: 30,
        height: 30,
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    profileimg: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 30
    },
    username: {
        fontWeight: "600",
        fontSize: 18,
        alignSelf: "center",
        marginTop: 10
    },
    addressbtn: {
        width: "90%",
        alignSelf: "center",
        height: 50,
        borderBottomWidth: 3,
        borderBottomColor: "#8c8c8c",
        justifyContent: 'center'
    }
});

