import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Image, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';
import colors from '../Utils/Colours';
import { getRating } from '../Utils/healper';
import Header from '../components/Header';
import Feather from 'react-native-vector-icons/dist/Feather';
import Category from '../components/Category';
import ReturnPolicy from '../components/ReturnPolicy';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Action';


const ProductDetailsScreen = ({ navigation, route }) => {
    const dispatch = useDispatch();

    const product = route.params;

    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchItemFromStorage = async () => {
            try {
                const storedItem = await AsyncStorage.getItem('selectedItem');
                if (storedItem) {
                    setItem(JSON.parse(storedItem));
                }
            } catch (error) {
                console.error('Error fetching item:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchItemFromStorage();
    }, []);

    const handleAddtocart = () => {
        if (item) {
            dispatch(addToCart(item));
        }
        navigation.navigate('AddtoCartScreen');
    };




    return (
        <ScrollView style={styles.container}>
            {isLoading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <View style={styles.productContainer}>
                    <View>

                        <Header />

                        <View style={styles.productImgSection}><Image source={item.productImg} style={styles.productImg} />
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "baseline", left: 28 }}>
                            <Text style={styles.rating}>{item.rating}</Text>
                            {getRating(item.rating)}
                            <Text style={{ color: colors.black }}>{item.ratingCount}</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", }}>
                            <Text numberOfLines={2} style={styles.productName}>{item.productname} </Text>
                            <Text numberOfLines={2} style={styles.productName}>{item.productdetails}</Text>
                            {/* <Text numberOfLines={2} style={styles.productName}>{item.betterdetails}</Text> */}
                        </View>
                    </View>
                    <View style={styles.productdetails}>
                        <View style={{ flexDirection: "row", }}>

                            <Text style={{ fontSize: 32, color: "red", fontWeight: "400" }}>
                                -10%
                            </Text>
                            <Text style={{ fontSize: 32, fontWeight: "400", color: colors.black }}>
                                {item.discountPrice}
                            </Text>
                        </View>
                        <Text style={{ fontSize: 14, fontWeight: "400", color: colors.black }}>EMI from ₹ 873. No Cost EMI avalible</Text>
                        <Text style={{ fontSize: 14, fontWeight: "400", color: colors.black }}>Inclusive of all taxes</Text>
                    </View>
                    <View style={[styles.productdetails,]}>
                        <Text style={{ fontSize: 18, fontWeight: "400", color: colors.black }} >Total: ₹17,299 </Text>
                        <Text style={{ fontSize: 14, fontWeight: "400", color: colors.black, marginTop: 10 }}>
                            Free Delivery Saturday , 9 March. Order Within 11 hrs 34 mins. Details
                        </Text>

                        <View style={{ flexDirection: "row", marginTop: 10 }}>
                            <Feather name="map-pin" size={16} color="#000000" />
                            <Text style={styles.deliver}>Deliver To Bhumit - Ahmedabad 380012</Text>
                        </View>
                    </View>
                    <View>
                        <View>
                            <TouchableOpacity onPress={() => handleAddtocart()} style={[styles.loginButton, { backgroundColor: "#fbda15" }]}>
                                <Text style={styles.loginButtonText}>Add To Cart</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity onPress={() => navigation.navigate('BuynowScreen')} style={[styles.loginButton, { backgroundColor: "#faa31d" }]}>
                                <Text style={styles.loginButtonText}>Buy Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View>
                        <ReturnPolicy />
                    </View>
                </View>

            )}
        </ScrollView>
    );
};

ProductDetailsScreen.propTypes = {
    navigation: PropTypes.object.isRequired,
    route: PropTypes.object.isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // padding: 20,
    },
    productContainer: {

    },
    productSection: {
        // borderWidth: 1,
        // borderColor: '#dddddd',
        // flexDirection: 'row',
        // marginVertical: 15,
        // // backgroundColor: 'red',
        alignItems: "center"
    },
    productImgSection: {

        justifyContent: 'center',
        height: 250
    },
    productDetailsSection: {
        backgroundColor: 'pink',
        height: "60%",


    },
    productImg: {
        height: 220,
        width: '100%',
        resizeMode: 'contain'
    },
    sponsored: {
        fontSize: 11,
        color: colors.default,
        marginBottom: 5,
    },
    productName: {
        fontSize: 14,
        color: colors.black,
        lineHeight: 14,
        marginTop: 10
    },
    row: {
        flexDirection: "row",
        alignItems: 'center',

    },
    rating: {
        fontSize: 14,
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
    },
    productdetails: {
        padding: 10, borderTopWidth: 1, borderBottomWidth: 1, marginTop: 18, borderTopColor: colors.default, borderBottomColor: colors.default
    },
    deliver: {
        fontSize: 13,
        color: "#2596be",
        paddingHorizontal: 6
    },
    loginButton: {
        marginTop: 10,
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 22,
        width: '80%',
        alignSelf: 'center',
    },
    loginButtonText: {
        color: '#000000',
        fontSize: 18,
        textAlign: 'center',
    }
});

export default ProductDetailsScreen;
