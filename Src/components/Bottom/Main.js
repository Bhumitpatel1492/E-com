
import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, FlatList } from 'react-native';
import { ProductData } from '../../Data/ProductData';
import colors from '../../Utils/Colours';
import MyProductitem from '../../common/MyProductItem';
import { useDispatch } from 'react-redux';
import { addItemToCart, addItemToWishlist } from '../../redux/actions/Actions';

const MainScreen = () => {
    const dispatch = useDispatch();

    const [categoryList, setCategoryList] = useState([]);
    const [MobileList, setMobileList] = useState([]);
    const [tshirtList, setTshirtList] = useState([]);
    const [shoesList, setShoesList] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [shirtList, setShirtList] = useState([]);
    const [jeansList, setJeansList] = useState([]);
    const [kitcheAppliancesList, setKitcheAppliancesList] = useState([]);



    useEffect(() => {
        if (ProductData && ProductData?.length > 0) {
            const categories = ProductData?.map(item => item?.category);
            setCategoryList(categories);
            setTshirtList(ProductData?.find(item => item?.category === 'tshirt')?.data || []);
            setJeansList(ProductData?.find(item => item?.category === 'jeans')?.data || []);
            setShoesList(ProductData?.find(item => item?.category === 'shoes')?.data || []);
            setWatchList(ProductData?.find(item => item?.category === 'watch')?.data || []);
            setShirtList(ProductData?.find(item => item?.category === 'shirt')?.data || []);
            setMobileList(ProductData?.find(item => item?.category === 'Mobile')?.data || []);
            setKitcheAppliancesList(ProductData?.find(item => item?.category === 'kitcheAppliances')?.data || []);
        }
    }, []);


    return (
        <ScrollView style={style.container}>
            <View style={style.container}>

                <View>
                    <FlatList
                        data={categoryList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity style={style.categorybtn} >
                                    <Text>{item.category}</Text>
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>
                <Text style={style.tshirttxt} > New shirt</Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={shirtList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductitem item={item} onAddToWishlist={(x) => {
                                    dispatch(addItemToWishlist(item))
                                }}
                                    onAddToCart={(x) => {
                                        dispatch(addItemToCart(item))
                                    }} />
                            )
                        }}
                    />
                </View>
                <Text style={style.tshirttxt} > New T-shirt</Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={tshirtList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductitem item={item} onAddToWishlist={(x) => {
                                    dispatch(addItemToWishlist(item))
                                }}
                                    onAddToCart={(x) => {
                                        dispatch(addItemToCart(item))
                                    }} />
                            )
                        }}
                    />
                </View>
                <Text style={style.tshirttxt} > New jeansList</Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={jeansList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductitem item={item} onAddToWishlist={(x) => {
                                    dispatch(addItemToWishlist(item))
                                }}
                                    onAddToCart={(x) => {
                                        dispatch(addItemToCart(item))
                                    }} />
                            )
                        }}
                    />
                </View>
                <Text style={style.tshirttxt} > New Shoes </Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={shoesList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductitem item={item} onAddToWishlist={(x) => {
                                    dispatch(addItemToWishlist(item))
                                }}
                                    onAddToCart={(x) => {
                                        dispatch(addItemToCart(item))
                                    }} />
                            )
                        }}
                    />
                </View>

                <Text style={style.tshirttxt} > New Watch</Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={watchList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductitem item={item} onAddToWishlist={(x) => {
                                    dispatch(addItemToWishlist(item))
                                }}
                                    onAddToCart={(x) => {
                                        dispatch(addItemToCart(item))
                                    }} />
                            )
                        }}
                    />
                </View>
                <Text style={style.tshirttxt} > New Mobile</Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={MobileList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductitem item={item} onAddToWishlist={(x) => {
                                    dispatch(addItemToWishlist(item))
                                }}
                                    onAddToCart={(x) => {
                                        dispatch(addItemToCart(item))
                                    }} />
                            )
                        }}
                    />
                </View>
                <Text style={style.tshirttxt} > New kitcheAppliancesList</Text>
                <View style={{ marginTop: 20 }}>
                    <FlatList
                        data={kitcheAppliancesList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <MyProductitem item={item} onAddToWishlist={(x) => {
                                    dispatch(addItemToWishlist(item))
                                }}
                                    onAddToCart={(x) => {
                                        dispatch(addItemToCart(item))
                                    }} />
                            )
                        }}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default MainScreen;


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    categorybtn: {
        padding: 10,
        borderwidth: 1,
        marginleft: 10,
        borderradius: 20,
    },
    tshirttxt: {
        marginTop: 20,
        marginLeft: 20,
        color: colors.black,
        fontSize: 16,
        fontWeight: "600"
    }
});

