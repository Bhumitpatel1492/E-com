
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ViewComponent, TouchableOpacity } from 'react-native';
import colors from '../Utils/Colours';
import Images from '../Utils/Images';


const Dealse = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Recommended deal for You</Text>
            <Image source={Images.recommended_icon} style={styles.imgstyle} />
            <View style={styles.bottomSection}>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.offdealbtn}>
                        <Text style={styles.offdealtxt}>18% off</Text>
                    </TouchableOpacity>
                    <Text style={styles.deal}>Deal</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.discountPrice}> ₹ 1549.00</Text>
                    <Text style={styles.mrp}>M.R.P</Text>
                    <Text style={styles.actualPrice}>₹ 1895.00</Text>
                </View>
                <Text style={styles.productname}>Nykaa Face Wash Gentle Skin Cleanser for all Skin Type</Text>
                <Text style={styles.allDeals}>See All Deals</Text>
            </View>
        </View>
    );
};


export default Dealse;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,

    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
        paddingHorizontal: 10
    },
    imgstyle: {
        height: 220,
        width: "100%",
        marginVertical: 10
    },
    bottomSection: {
        paddingHorizontal: 10
    },
    offdealbtn: {
        backgroundColor: '#be0201',
        width: 60,
        alignItems: "center",
        padding: 5,
        borderRadius: 3
    },
    offdealtxt: {
        color: "#FFFFFF",
        fontSize: 12
    },
    deal: {
        color: "#be0201",
        fontWeight: '600',
        marginLeft: 6,
        fontSize: 12
    },
    row: {
        flexDirection: 'row',
        alignItems: "center"
    },
    discountPrice: {
        color: colors.black,
        fontSize: 16,
        marginVertical: 5
    },
    mrp: {
        color: colors.black,
        fontSize: 10,
        marginHorizontal: 5
    },
    actualPrice: {
        fontSize: 10,
        textDecorationLine: 'line-through'
    },
    productname: {
        color: colors.black,
        fontSize: 14,
    },
    allDeals: {
        color: "#017185",
        marginVertical: 10,
        fontSize: 14
    }

});