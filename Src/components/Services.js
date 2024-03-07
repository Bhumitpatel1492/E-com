import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, ViewComponent } from 'react-native';
import Images from '../Utils/Images';
import colors from '../Utils/Colours';
import { resentSearchData } from '../Data/resentSearchdata';


const Services = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container} contentContainerStyle={{ paddingRight: 20 }}>
            <View style={styles.Servicescontainer}>
                <View style={styles.row}>
                    <View style={styles.inndercontainer}>
                        <Image style={styles.imgStyle} source={Images.amazon_pay__icon} />
                        <Text style={styles.title}>Amazon Pay</Text>
                    </View>
                    <View style={styles.inndercontainer}>
                        <Image style={styles.imgStyle} source={Images.send_money_icon} />
                        <Text style={styles.title}>Send Money</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.inndercontainer}>
                        <Image style={styles.imgStyle} source={Images.pay_bills_icon} />
                        <Text style={styles.title}>Pay Bills</Text>
                    </View>
                    <View style={styles.inndercontainer}>
                        <Image style={styles.imgStyle} source={Images.scan_qr_icon} />
                        <Text style={styles.title}>Scan Qr</Text>
                    </View>
                </View>
            </View>
            {
                resentSearchData.map((item) => (
                    <View key={item.id} style={styles.outercontainer}>
                        <Text style={styles.resentSearch}>{item.title}</Text>
                        <Image source={item.image} style={styles.serviceimg} />
                    </View>
                ))
            }

        </ScrollView>
    );
};

export default Services;

const styles = StyleSheet.create({
    container: {
        marginTop: -20,
        paddingHorizontal: 10
    }, Servicescontainer: {
        backgroundColor: "#FFFFFF"
    },
    imgStyle: {
        height: 50,
        width: 50,
        borderRadius: 50
    },
    row: {
        flexDirection: "row",
        justifyContent: 'center'
    },
    inndercontainer: {
        padding: 10,
        alignItems: 'center',
        paddingTop: 15
    },
    title: {
        fontSize: 10,
        color: colors.black,
        marginTop: 2
    },
    serviceimg: {
        height: 130,
        width: '100%'
    },
    outercontainer: {
        marginLeft: 8,
        borderRadius: 5,
        elevation: 5,
        backgroundColor: "#FFFFFF",
        padding: 5,
        width: 140,

    },
    resentSearch: {
        fontSize: 13,
        color: colors.black,
        marginBottom: 8
    }
});


