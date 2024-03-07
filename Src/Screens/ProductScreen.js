//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../Utils/Colours';
import Images from '../Utils/Images';
import { getRating } from '../Utils/healper';
import { ProductData } from '../Data/ProductData';

// create a component
const ProductScreen = ({ navigation }) => {
    const handleItemPress = async (item) => {
        try {
            // Store the pressed item in AsyncStorage
            await AsyncStorage.setItem('selectedItem', JSON.stringify(item));
            // Navigate to the ProductDetailsScreen
            navigation.navigate('ProductDetailsScreen');
        } catch (error) {
            console.error('Error storing item:', error);
        }
    }
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Result</Text>
            <Text style={styles.tagline}>Price and Other details may vary based on product asize and color.</Text>
            {ProductData.map(item => (
                <TouchableOpacity onPress={() => handleItemPress(item)} style={styles.productSection}>
                    <View style={styles.productImgSection}><Image source={item.productImg} style={styles.productImg} />
                    </View>
                    <View style={styles.productDetailsSection}>
                        <Text style={styles.sponsored} >Sponsored</Text>
                        <Text numberOfLines={2} style={styles.productName}>{item.productname} </Text>
                        <Text numberOfLines={2} style={styles.productName}>{item.productdetails}</Text>
                        <Text numberOfLines={2} style={styles.productName}>{item.betterdetails}</Text>
                        <View style={styles.row}>
                            <Text style={styles.rating}>{item.rating}</Text>
                            {getRating(item.rating)}
                            <Text>{item.ratingCount}</Text>
                        </View>

                        <Text style={styles.price}>{item.discountPrice}</Text>
                        <Text style={styles.discountline}>Up to 5% back with Pay on Credit Cart</Text>
                        <Text style={styles.discountline}>{item.deliveryBy}</Text>
                    </View>
                </TouchableOpacity>
            ))}

        </ScrollView>
    );
};


export default ProductScreen;

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.black,
        padding: 10
    },
    tagline: {
        fontSize: 11,
        color: colors.default
    },
    productSection: {
        borderWidth: 1,
        borderColor: '#dddddd',
        flexDirection: 'row',
        marginVertical: 15
    },
    productImgSection: {
        width: '40%',
        borderColor: 'red',
        // right: 10
    },
    productDetailsSection: {
        Width: '45%',
        padding: 10,
        // backgroundColor: 'red',
        right: 12
    },
    productImg: {
        height: 150,
        width: '100%',
        resizeMode: 'contain'
    },
    sponsored: {
        fontSize: 11,
        color: colors.default,
        marginBottom: 5,
    },
    productName: {
        fontSize: 12,
        color: colors.black,
        lineHeight: 18
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',

    },
    rating: {
        fontSize: 10,
        color: "#017185",
        marginRight: 6
    },
    price: {
        fontSize: 14,
        color: colors.black,
        fontWeight: '600'
    },
    discountline: {
        fontSize: 12,
        width: '88%'
    }
});