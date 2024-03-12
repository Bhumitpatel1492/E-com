import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addAddress } from '../redux/actions/Actions';
import Images from '../Utils/Images';


const Addaddress = ({ navigation }) => {
    const dispatch = useDispatch()
    const [cityName, setCityName] = useState('');
    const [buildingName, setBuildingName] = useState('');
    const [pincode, setPincode] = useState('');


    return (
        <View style={styles.container}>
            <View style={styles.view}>
                {/* <Text style={styles.profiletxt}>My Address</Text> */}
                <TouchableOpacity style={styles.settingbtn} onPress={() => navigation.goBack()}>
                    <Image source={require('../../Assets/Images/back.png')} style={{ width: 24, height: 24 }} />
                    {/* <Text style={styles.profiletxt}>Add Address</Text> */}
                </TouchableOpacity>
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputSection}>
                    {/* <Image style={styles.searchIcon} source={Images.setting_icon} /> */}
                    <TextInput
                        placeholderTextColor={"black"}
                        style={styles.input}
                        placeholder="Enter City Name"
                        onChangeText={text => setCityName(text)}
                        value={cityName}

                    />
                </View>

                <View style={styles.inputSection}>
                    {/* <Image style={styles.searchIcon} source={} /> */}
                    <TextInput
                        placeholderTextColor={"black"}
                        style={styles.input}
                        placeholder="Enter Building Name"
                        onChangeText={text => setBuildingName(text)}
                        value={buildingName}
                    />
                </View>

                <View style={styles.inputSection}>
                    {/* <Image style={styles.searchIcon} source={} /> */}
                    <TextInput
                        placeholderTextColor={"black"}
                        style={styles.input}
                        placeholder="Enter Pincode"
                        onChangeText={text => setPincode(text)}
                        value={pincode}
                        keyboardType="numeric"
                    />
                </View>

            </View>
            <View style={{ marginBottom: 30 }} >
                <TouchableOpacity style={styles.loginButton} onPress={() => {
                    if (cityName !== '' && buildingName !== '' && pincode !== '') {
                        dispatch(addAddress({ cityName: cityName, buildingName: buildingName, pincode: pincode }))
                        navigation.goBack()
                    } else {
                        Alert.alert('Please fill all the fields')
                    }
                }
                }>
                    <Text style={styles.loginButtonText}>Save Address</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};


export default Addaddress;
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
        padding: 7,
        borderRadius: 10,
        marginLeft: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    inputContainer: {
        // paddingHorizontal: 20,
        // backgroundColor: 'green',
        // paddingVertical: 20,
        // bottom: 22,
        // alignItems: "center"
        height: 300
    },
    loginButton: {
        marginTop: 10,
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 5,
        width: '50%',
        alignSelf: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    input: {
        width: '80%',
        height: 40,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
        borderRadius: 5,
    },
    inputSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },

});