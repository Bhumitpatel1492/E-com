import React, { useState } from 'react';
import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import colors from '../Utils/Colours';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MainScreen from '../components/Bottom/Main';
import SearchScreen from '../components/Bottom/Search';
import AddcartScreen from '../components/Bottom/Addcart';
import WishlistScreen from '../components/Bottom/Wishlist';
import ProfileScreen from '../components/Bottom/Profile';
import { useSelector } from 'react-redux';

const HomeScreen = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const data = useSelector(state => state);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.sky} barStyle="dark-content" />

            {selectedTab === 0 ? <MainScreen /> :
                selectedTab === 1 ? <SearchScreen /> :
                    selectedTab === 2 ? <AddcartScreen /> :
                        selectedTab === 3 ? <WishlistScreen /> :
                            <ProfileScreen />
            }

            <View style={styles.tabview}>
                <TouchableOpacity style={styles.tabbtn} onPress={() => setSelectedTab(0)}>
                    {selectedTab === 0 ? (
                        <Ionicons name="home" size={26} color="#167aac" />
                    ) : (
                        <Ionicons name="home-outline" size={26} color="#000000" />
                    )}
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabbtn} onPress={() => setSelectedTab(1)}>
                    {selectedTab === 1 ? (
                        <Ionicons name="search-circle" size={42} color="#167aac" />
                    ) : (
                        <Ionicons name="search-circle-outline" size={32} color="#000000" />
                    )}
                </TouchableOpacity>

                <View style={styles.bagview}>
                    <TouchableOpacity style={styles.bagbtn} onPress={() => setSelectedTab(2)}>
                        {selectedTab === 2 ? (
                            <Ionicons name="bag-handle" size={26} color="#167aac" />
                        ) : (
                            <Ionicons name="bag-handle-outline" size={26} color="#000000" />
                        )}
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>
                                {data?.reducers?.length.toString()}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.tabbtn} onPress={() => setSelectedTab(3)}>
                    {selectedTab === 3 ? (
                        <Ionicons name="heart" size={26} color="#167aac" />
                    ) : (
                        <Ionicons name="heart-outline" size={26} color="#000000" />
                    )}
                    <View style={styles.badge}>
                        <Text style={styles.badgeText}>
                            {data?.wishlistReducer?.length.toString()}
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.tabbtn} onPress={() => setSelectedTab(4)}>
                    {selectedTab === 4 ? (
                        <Ionicons name="person" size={26} color="#167aac" />
                    ) : (
                        <Ionicons name="person-outline" size={26} color="#000000" />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
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
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    bagview: {
        flex: 1,
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
    badge: {
        width: 20,
        height: 20,
        backgroundColor: "red",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: 5,
        right: 5
    },
    badgeText: {
        color: colors.white,
        fontWeight: "600"
    }
});
