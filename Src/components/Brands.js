//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Images from '../Utils/Images';
import colors from '../Utils/Colours';

const Brands = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Brands Of The Day</Text>
                <View style={styles.row}>
                    <View style={styles.brands}>

                        <Image source={Images.brand1_icon} style={styles.imgstyle} />
                        <Text style={styles.brandtitle}>Min. 20% off | CaratLane Diamond Neklace</Text>
                    </View>
                    <View style={styles.brands}>
                        <Image source={Images.brand2_icon} style={styles.imgstyle} />
                        <Text style={styles.brandtitle}>Min. 40% off | Fossile , Titan Smart Watch</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.brands}>

                        <Image source={Images.brand3_icon} style={styles.imgstyle} />
                        <Text style={styles.brandtitle}>Heels - Upto 50% OFF On  Heeled Sandals , High Heels </Text>
                    </View>
                    <View style={styles.brands}>
                        <Image source={Images.brand4_icon} style={styles.imgstyle} />
                        <Text style={styles.brandtitle}>Sony 60W Blutooth SoundBar Speaker Audio Engine</Text>
                    </View>
                </View>

            </View>

        </View>
    );
};



export default Brands;

const styles = StyleSheet.create({
    container: {
        marginTop: 10,

        borderTopWidth: 1,
        borderTopColor: "#dddddd"
    },
    imgstyle: {
        height: 150,
        width: '100%',
        borderRadius: 4
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
        paddingHorizontal: 10,
        padding: 10,

    },

    row: {
        flexDirection: 'row',
        alignItems: "center"
    },
    brands: {
        width: '50%',
        padding: 10
    },
    brandtitle: {
        fontSize: 12,
        color: colors.black,
        marginTop: 4
    }
});