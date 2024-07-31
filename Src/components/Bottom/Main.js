
import React, { Component, useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView, FlatList, ActivityIndicator, Dimensions } from 'react-native';
import { ProductData } from '../../Data/ProductData';
import colors from '../../Utils/Colours';
import MyProductitem from '../../common/MyProductItem';
// import { useDispatch } from 'react-redux';
// import { addItemToCart, addItemToWishlist } from '../../redux/actions/Actions';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';


const MainScreen = () => {
    const dispatch = useDispatch();
    const window = Dimensions.get('screen')

    const [categoryList, setCategoryList] = useState([]);
    const [MobileList, setMobileList] = useState([]);
    const [tshirtList, setTshirtList] = useState([]);
    const [shoesList, setShoesList] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [shirtList, setShirtList] = useState([]);
    const [jeansList, setJeansList] = useState([]);
    const [kitcheAppliancesList, setKitcheAppliancesList] = useState([]);
    const [showloading, setShowLoading] = useState(false)



    useEffect(() => {
        setShowLoading(true)
        const timeout = setTimeout(() => {
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
            setShowLoading(false)

        }, 4000);
        return () => clearTimeout(timeout);
    }, []);


    const renderloading = () => {
        return (
            <SkeletonPlaceholder>
                <SkeletonPlaceholder.Item flexDirection="row" alignItems="center">
                    <SkeletonPlaceholder.Item width={80} height={80} borderRadius={40} />
                    <SkeletonPlaceholder.Item marginLeft={20}>
                        <SkeletonPlaceholder.Item width={120} height={20} borderRadius={4} />
                        <SkeletonPlaceholder.Item marginTop={6} width={80} height={20} borderRadius={4} />
                        <SkeletonPlaceholder.Item marginTop={6} width={100} height={20} borderRadius={4} />
                    </SkeletonPlaceholder.Item>
                </SkeletonPlaceholder.Item>
            </SkeletonPlaceholder>
        )

    }


    return (
        <ScrollView style={style.container}>

            <View style={style.container}>

                <View>
                    {
                        showloading == true ? (
                            { renderloading }
                        ) : (
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
                        )
                    }

                </View>
                {
                    showloading == true ? (
                        { renderloading }
                    ) : (
                        <Text style={style.tshirttxt} > New shirt</Text>
                    )}
                <View style={{ marginTop: 20 }}>
                    {
                        showloading == true ? (
                            { renderloading }
                        ) : (
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
                        )}
                </View>
                {
                    showloading == true ? (
                        { renderloading }
                    ) : (
                        <Text style={style.tshirttxt} > New T-shirt</Text>
                    )}
                <View style={{ marginTop: 20 }}>
                    {
                        showloading == true ? (
                            { renderloading }
                        ) : (
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
                        )}
                </View>
                {
                    showloading == true ? (
                        { renderloading }
                    ) : (
                        <Text style={style.tshirttxt} > New jeansList</Text>
                    )}
                <View style={{ marginTop: 20 }}>
                    {
                        showloading == true ? (
                            { renderloading }
                        ) : (
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
                        )}
                </View>
                {
                    showloading == true ? (
                        { renderloading }
                    ) : (
                        <Text style={style.tshirttxt} > New Shoes </Text>
                    )}
                <View style={{ marginTop: 20 }}>
                    {
                        showloading == true ? (
                            { renderloading }
                        ) : (
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
                        )}
                </View>
                {
                    showloading == true ? (
                        { renderloading }
                    ) : (

                        <Text style={style.tshirttxt} > New Watch</Text>
                    )}
                <View style={{ marginTop: 20 }}>
                    {
                        showloading == true ? (
                            { renderloading }
                        ) : (
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
                        )}
                </View>
                {
                    showloading == true ? (
                        { renderloading }
                    ) : (
                        <Text style={style.tshirttxt} > New Mobile</Text>
                    )}
                <View style={{ marginTop: 20 }}>
                    {
                        showloading == true ? (
                            { renderloading }
                        ) : (
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
                        )}
                </View>
                {
                    showloading == true ? (
                        { renderloading }
                    ) : (
                        <Text style={style.tshirttxt} > New kitcheAppliancesList</Text>
                    )}
                <View style={{ marginTop: 20 }}>
                    {
                        showloading == true ? (
                            { renderloading }
                        ) : (
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
                        )}
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

