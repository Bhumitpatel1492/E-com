import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeAddress } from '../redux/actions/Actions';
import { useIsFocused } from '@react-navigation/native';
import Images from '../Utils/Images';

let addressList = []
const MyAddress = ({ navigation }) => {
    const isfocused = useIsFocused()
    const dispatch = useDispatch()
    const addressList = useSelector(state => state.AddaddressReducer)
    return (
        <View style={styles.container}>
            <View style={styles.view}>
                <Text style={styles.profiletxt}>My Address</Text>
                <TouchableOpacity style={styles.settingbtn} onPress={() => navigation.navigate('Addaddress')}>
                    <Image source={Images.setting_icon} style={{ width: 24, height: 24 }} />
                    <Text style={styles.profiletxt}>Add Address</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={addressList} renderItem={({ item, index }) => {
                return (
                    <View style={{ width: '100%', borderWidth: 0.2, borderColor: "#8c8c8c", alignSelf: "center", alignItems: "center", justifyContent: "space-between", flexDirection: "row" }}>
                        <View>
                            <Text style={{ marginLeft: 20 }}>{"City:" + item?.cityName}</Text>
                            <Text style={{ marginLeft: 20 }}>{"Building:" + item?.buildingName}</Text>
                            <Text style={{ marginLeft: 20, marginBottom: 10 }}>{"Pincode:" + item?.pincode}</Text>
                        </View>
                        <TouchableOpacity style={{ borderWidth: 0.2, padding: 7, marginRight: 20 }} onPress={() => {
                            dispatch(removeAddress(index))
                        }} >
                            <Text>Delete address</Text>
                        </TouchableOpacity>
                    </View>
                )
            }} />
        </View>
    );
};


export default MyAddress;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, view: {
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

        borderWidth: 0.2,
        padding: 15,
        borderRadius: 10,
        marginRight: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
});