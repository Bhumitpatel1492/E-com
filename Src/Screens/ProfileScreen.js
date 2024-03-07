import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import colors from '../Utils/Colours';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/dist/Feather';





const ProfileScreen = () => {

    const handlelogout = () => {
        Alert.alert("Are you sure you want to logout?")
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Hey! Bhumit</Text>
            </View>
            <ScrollView contentContainerStyle={styles.scrollContainer}>

                <View style={styles.optionsContainer}>
                    <View style={styles.column}>
                        <TouchableOpacity style={styles.optionButton} >
                            <Text style={styles.optionButtonText}>Orders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.optionButtonText}>Coupons</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.column}>
                        <TouchableOpacity style={styles.optionButton} >
                            <Text style={styles.optionButtonText}>Wishlist</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionButton}>
                            <Text style={styles.optionButtonText}>Help Center</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.sectionContainer}>
                    <Text style={styles.sectionText}>Account Settings</Text>
                    <TouchableOpacity style={[styles.accountsettingbtn, { marginTop: 18 }]}>
                        <AntDesign name="user" size={22} color="#000000" style={{ right: 20, color: '#167aac' }} />
                        <Text style={[styles.acctountsettingbtntxt,]}> Edit Profile</Text>
                        <AntDesign name="right" size={18} color="#000000" style={{ left: 8 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountsettingbtn} >
                        <FontAwesome name="credit-card" size={18} color="#000000" style={{ right: 18, color: '#167aac' }} />
                        <Text style={styles.acctountsettingbtntxt}>Save Cards & Wallet</Text>
                        <AntDesign name="right" size={18} color="#000000" style={{ left: 8 }} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountsettingbtn}>
                        <EvilIcons name="location" size={26} color="#000000" style={{ right: 18, color: '#167aac' }} />

                        <Text style={styles.acctountsettingbtntxt}>Save Addresses</Text>
                        <AntDesign name="right" size={18} color="#000000" style={{ left: 8 }} />

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountsettingbtn}>
                        <MaterialIcons name="edit-notifications" size={24} color="#000000" style={{ right: 14, color: '#167aac' }} />

                        <Text style={styles.acctountsettingbtntxt}>Notification Settings</Text>
                        <AntDesign name="right" size={18} color="#000000" style={{ left: 8 }} />

                    </TouchableOpacity>
                </View>

                <View style={[styles.sectionContainer]}>
                    <Text style={styles.sectionText}>My Activity</Text>
                    <TouchableOpacity style={[styles.accountsettingbtn, { marginTop: 10 }]}>
                        <MaterialCommunityIcons name="note-edit-outline" size={22} color="#000000" style={{ right: 20, color: '#167aac' }} />
                        <Text style={[styles.acctountsettingbtntxt,]}>Reviews</Text>
                        <AntDesign name="right" size={18} color="#000000" style={{ left: 8 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountsettingbtn} >
                        <Feather name="message-square" size={18} color="#000000" style={{ right: 18, color: '#167aac' }} />
                        <Text style={styles.acctountsettingbtntxt}>Question & Answers</Text>
                        <AntDesign name="right" size={18} color="#000000" style={{ left: 8 }} />

                    </TouchableOpacity>
                </View>
                <View style={[styles.sectionContainer]}>
                    <Text style={styles.sectionText}>Feedback & Information</Text>
                    <TouchableOpacity style={[styles.accountsettingbtn, { marginTop: 10 }]}>
                        <MaterialCommunityIcons name="note-multiple-outline" size={22} color="#000000" style={{ right: 20, color: '#167aac' }} />
                        <Text style={[styles.acctountsettingbtntxt,]}>Terms && Policies</Text>
                        <AntDesign name="right" size={18} color="#000000" style={{ left: 8 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.accountsettingbtn} >
                        <AntDesign name="questioncircleo" size={18} color="#000000" style={{ right: 18, color: '#167aac' }} />
                        <Text style={styles.acctountsettingbtntxt}>Browse FAQs</Text>
                        <AntDesign name="right" size={18} color="#000000" style={{ left: 8 }} />

                    </TouchableOpacity>
                </View>

                <View style={{ height: 120 }} >
                    <TouchableOpacity style={styles.loginButton} onPress={() => handlelogout()}>
                        <Text style={styles.loginButtonText}>Log Out</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: colors.white
        borderBottomColor: colors.lightGray

    },
    header: {
        paddingVertical: 12,
        paddingHorizontal: 20,
        // borderBottomWidth: 1,
        borderBottomColor: colors.lightGray
    },
    headerText: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '500'
    },
    scrollContainer: {
        flexGrow: 1,
        // paddingBottom: 20
    },
    optionsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "#ffffff",
        height: "22%"
    },
    column: {
        // flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%'
    },
    optionButton: {
        marginTop: 10,
        paddingVertical: 12,
        // paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: colors.tdefault,
        width: '85%',
        alignItems: "center"
    },
    optionButtonText: {
        color: colors.black,
        fontSize: 18,
        fontWeight: '500'
    },
    sectionContainer: {
        marginVertical: 10,
        paddingHorizontal: 20,
        shadowOpacity: 10,
        backgroundColor: "#ffffff"
    },
    sectionText: {
        fontSize: 18,
        color: colors.black,
        fontWeight: '500'
    },
    accountsettingbtn: { height: 50, justifyContent: "space-around", flexDirection: "row", alignItems: "baseline" },
    acctountsettingbtntxt: { fontSize: 16, color: colors.black, fontWeight: "500", alignItems: "baseline", width: '60%' },
    loginButton: {
        // marginTop: 10,
        backgroundColor: "#ffffff",
        paddingVertical: 10,
        borderRadius: 5,
        width: '88%',
        alignSelf: 'center',
    },
    loginButtonText: {
        color: '#167aac',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default ProfileScreen;
