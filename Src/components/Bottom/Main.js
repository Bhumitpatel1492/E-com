
import React, { Component, useEffect } from 'react';
import { View,StyleSheet, Touchable, Text, ScrollView } from 'react-native';
import { ProductData } from '../../Data/ProductData';
import colors from '../../Utils/Colours';
import MyProductitem from '../../common/MyProductItem';

const MainScreen = () => {

    const [categoryList, setCategoryList] = useState([]);
    const [MobileList, setMobileList] = useState([]);
    const [tshirtList, setTshirtList] = useState([]);
    const [shoesList, setShoesList] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [shirtList , setShirtList] = useState([]);
    const [jeansList, setJeansList] = useState([]);
    const [kitcheAppliancesList, setKitcheAppliancesList] = useState([]);

    useEffect(() => {
         let tempcategoryList = [];
        ProductData.category.map((item) => {
            tempcategoryList.push(item);
        });
        setCategoryList(tempcategoryList);
        setTshirtList(ProductData.category[0].data);
        setJeansList(ProductData.category[1].data);
        setShoesList(ProductData.category[2].data);
        setWatchList(ProductData.category[3].data);
        setShirtList(ProductData.category[4].data);
        setMobileList(ProductData.category[5].data);
        setKitcheAppliancesList(ProductData.category[6].data);


    }, []);

    return (
        <ScrollView style={style.container}>
       <View style={style.container}>
            
            <View>
                <FlatList 
                 data={categoryList}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item , index}) => { 
                 return(
                    <TouchableOpacity style ={style.categorybtn} >
                        <Text>{item.category}</Text>
                    </TouchableOpacity>
                 )
                 }}
                />
            </View>
            <Text style ={style.tshirttxt} > New shirt</Text>
            <View style={{marginTop:20}}>
                <FlatList 
                 data={shirtList}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item , index}) => { 
                 return(
                    <MyProductitem item={item}/>
                 )
                 }}
                />
            </View>
            <Text style ={style.tshirttxt} > New T-shirt</Text>
            <View style={{marginTop:20}}>
                <FlatList 
                 data={tshirtList}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item , index}) => { 
                 return(
                    <MyProductitem item={item}/>
                 )
                 }}
                />
            </View>
            <Text style ={style.tshirttxt} > New jeansList</Text>
            <View style={{marginTop:20}}>
                <FlatList 
                 data={jeansList}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item , index}) => { 
                 return(
                    <MyProductitem item={item}/>
                 )
                 }}
                />
            </View>
            <Text style ={style.tshirttxt} > New Shoes </Text>
            <View style={{marginTop:20}}>
                <FlatList 
                 data={shoesList}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item , index}) => { 
                 return(
                    <MyProductitem item={item}/>
                 )
                 }}
                />
            </View>

            <Text style ={style.tshirttxt} > New Watch</Text>
            <View style={{marginTop:20}}>
                <FlatList 
                 data={watchList}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item , index}) => { 
                 return(
                    <MyProductitem item={item}/>
                 )
                 }}
                />
            </View>
            <Text style ={style.tshirttxt} > New Mobile</Text>
            <View style={{marginTop:20}}>
                <FlatList 
                 data={MobileList}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item , index}) => { 
                 return(
                    <MyProductitem item={item}/>
                 )
                 }}
                />
            </View>
            <Text style ={style.tshirttxt} > New kitcheAppliancesList</Text>
            <View style={{marginTop:20}}>
                <FlatList 
                 data={kitcheAppliancesList}
                 horizontal
                 showsHorizontalScrollIndicator={false}
                 renderItem={({item , index}) => { 
                 return(
                    <MyProductitem item={item}/>
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
    categorybtn : {
        padding: 10,
        borderwidth: 1,
        marginleft: 10,
        borderradius: 20,
    },
    tshirttxt: {
        marginTop:20,
        marginLeft:20,
        color:colors.black,
        fontSize:16 ,
        fontWeight:"600"
    }
});

