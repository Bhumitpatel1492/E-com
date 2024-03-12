
import React, { Component, useEffect } from 'react';
import { View, StyleSheet, Touchable, Text, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import colors from '../Utils/Colours';


const CartItem = ({ item, onRemoveItem, addItemToWishlist, iswishlist, onAddToCart }) => {

    return (
        <View style={style.container}>
            <Image source={item.image} style={style.productimg} resizeMode='contain' />
            <Text numberOfLines={1} ellipsizeMode='tail' style={style.productname}>{item.name}</Text>
            <View style={style.cartview}>
                <Text style={style.pricetxt}>{"₹" + item.price}</Text>
                {iswishlist ? (
                    <TouchableOpacity style={style.addcartbtn} onPress={() => onAddToCart(item)} >
                        <Text>Add To Cart</Text>
                    </TouchableOpacity>
                ) : (<TouchableOpacity style={style.addcartbtn} onPress={() => onRemoveItem(item)} >
                    <Text>Remove Item</Text>
                </TouchableOpacity>)}
            </View>

            {
                iswishlist ? (<TouchableOpacity style={style.likebtn} onPress={(item) => onRemoveItem(item)}>
                    <Image source={require('../../Assets/Images/heart.png')} style={style.likeimg} tintColor='red' />
                </TouchableOpacity>) : (<TouchableOpacity style={style.likebtn} onPress={() => addItemToWishlist(item)}>
                    <Ionicons name="heart-outline" size={26} color="#000000" />
                </TouchableOpacity>)
            }
        </View>
    );
};

export default CartItem;


const style = StyleSheet.create({
    container: {
        width: '80%',
        height: 300,
        borderRadius: 10,
        elevation: 5,
        backgroundColor: "#fff",
        // marginLeft: 20,
        marginBottom: 10,
        justifyContent: "center",
        // alignItems: "center"
        alignSelf: "center"
    },
    productimg: {
        width: '100%',
        height: '70%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    productname: {
        marginLeft: 10,
        marginTop: 10,
        fontSize: 14,
        fontWeight: "600",
        color: colors.black

    },
    cartview: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 10,
        alignItems: "center"
    },
    pricetxt: {
        fontSize: 15,
        fontWeight: "600",
        color: colors.black
    },
    addcartbtn: {
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 7,
        paddingTop: 7
    },
    likebtn: {
        width: 40,
        height: 40,
        backgroundColor: '#fff',
        borderRadius: 20,
        elevation: 5,
        position: 'absolute',
        top: 10,
        right: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    likeimg: {
        width: 24,
        height: 24
    }
});

