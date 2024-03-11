
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, Touchable, TouchableOpacity, Image } from 'react-native';
import colors from '../Utils/Colours';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MainScreen from '../components/Bottom/Main';
import SearchScreen from '../components/Bottom/Search';
import AddcartScreen from '../components/Bottom/Addcart';
import WishlistScreen from '../components/Bottom/Wishlist';
import ProfileScreen from '../components/Bottom/Profile';




const HomeScreen = () => {

    const [selectedTab, setSelectedTab] = useState(0);


    return (
        <View style={style.container}>

            {
                selectedTab == 0 ? <MainScreen /> : selectedTab == 1 ? <SearchScreen /> : selectedTab == 2 ? <AddcartScreen /> : selectedTab == 3 ? <WishlistScreen /> : <ProfileScreen />
            }

            <View style={style.tabview}>
                <TouchableOpacity style={style.tabbtn} onPress={() => setSelectedTab(0)}>
                    {selectedTab === 0 ? (
                        <Ionicons name="home" size={26} color="#167aac" style={{ right: 18 }} />
                    ) : (
                        <Ionicons name="home-outline" size={26} color="#000000" style={{ right: 18 }} />
                    )}
                    {/* <Image source={require('../assets/home.png')} style={[style.img,{tintColor: selectedTab == 0 ? '#000':'#8e8e8e'}]} /> */}
                </TouchableOpacity>
                <TouchableOpacity style={style.tabbtn} onPress={() => setSelectedTab(1)} >
                    {selectedTab === 1 ? (
                        <Ionicons name="search-circle" size={26} color="#167aac" style={{ right: 18 }} />
                    ) : (
                        <Ionicons name="search-circle-outline" size={26} color="#000000" style={{ right: 18 }} />
                    )}


                    {/* <Image source={require('../assets/search.png')} style={[style.img,{tintColor: selectedTab == 1 ? '#000':'#8e8e8e'}]}/> */}

                </TouchableOpacity>
                <View style={style.bagview}>
                    <TouchableOpacity style={[style.bagbtn, { backgroundColor: selectedTab == 2 ? 'green' : colors.black, }]} onPress={() => setSelectedTab(2)}>

                        {selectedTab === 2 ? (
                            <Ionicons name="bag-handle" size={26} color="#167aac" style={{ right: 18 }} />
                        ) : (
                            <Ionicons name="bag-handle-outline" size={26} color="#000000" style={{ right: 18 }} />
                        )}

                        {/* <Image source={require('../assets/bag.png')} style={[style.img ,{tintColor:colors.white}]} /> */}
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={style.tabbtn} onPress={() => setSelectedTab(3)} >
                    {selectedTab === 3 ? (
                        <Ionicons name="heart" size={26} color="#167aac" style={{ right: 18 }} />
                    ) : (
                        <Ionicons name="heart-outline" size={26} color="#000000" style={{ right: 18 }} />
                    )}

                    {/* <Image source={require('../assets/heart.png')} style={[style.img,{tintColor: selectedTab == 3 ? '#000':'#8e8e8e'}]} /> */}
                </TouchableOpacity>
                <TouchableOpacity style={style.tabbtn} onPress={() => setSelectedTab(4)} >
                    {selectedTab === 4 ? (
                        <Ionicons name="person" size={26} color="#167aac" style={{ right: 18 }} />
                    ) : (
                        <Ionicons name="person-outline" size={26} color="#000000" style={{ right: 18 }} />
                    )}

                    {/* <Image source={require('../assets/user.png')} style={[style.img,{tintColor: selectedTab == 4 ? '#000':'#8e8e8e'}]} /> */}
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default HomeScreen;


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabview: {
        width: "100%",
        height: 70,
        backgroundColor: "#fff",
        position: 'absolute',
        bottom: 0,
        flexDirection: "row",
        alignItems: "center"
    },
    tabbtn: {
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    bagview: {
        width: "20%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    bagbtn: {
        width: 44,
        height: 44,
        borderRadius: 22,
        justifyContent: "center",
        alignItems: "center"
    },
    img: { width: 24, height: 24 }
});

