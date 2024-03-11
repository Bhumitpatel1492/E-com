
import React, { Component, useEffect } from 'react';
import { View,StyleSheet, Touchable, Text, Image, TouchableOpacity } from 'react-native';

const MyProductitem = ({item}) => {
  
     return (
        <View style={style.container}>
        <Image source={item.image} style={style.productimg} />
        <Text style={style.productname}>{item.name}</Text> 
        <View style={style.cartview}>
        <Text style ={style.pricetxt}>{ "₹" + item.price}</Text>
        <TouchableOpacity style={style.addcartbtn} >
            <Text>add to cart</Text>
        </TouchableOpacity>
        </View>
        <TouchableOpacity style = {style.likebtn}>
            <Image source={require('../assets/heart.png')} style={style.likeimg} />
        </TouchableOpacity>           
        </View>
    );
};

export default MyProductitem;


const style = StyleSheet.create({
    container: {
        width:200,
        height:200,
        borderRadius:10,
        elevation:5,
        backgroundColor:"#fff",
        marginLeft:20,
        marginBottom:10
    },
    productimg : {
        width:'100%',
        height:'50%',
        borderTopLeftRadius:10,
        borderTopRightRadius:10
    },
    productname : {
        marginLeft:10,
        marginTop:10,
        fontSize:18,
        fontWeight:"600"
    },
    cartview : {
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:10,
        paddingRight:10,
        marginTop:10,
        alignItems:"center"
    },
    pricetxt: {
        fontSize:18,
        fontWeight:"600"
    },
    addcartbtn : {
        borderWidth:1,
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10,
        paddingBottom:7,
        paddingTop:7
    },
    likebtn : {
        width:40,
        height:40,
        backgroundColor:'#fff',
        borderRadius:20,
        elevation:5,
        position:'absolute',
        top:10,
        right:10,
        justifyContent:"center",
        alignItems:"center"
    },
    likeimg : {
        width:24,
        height:24
    }
});

