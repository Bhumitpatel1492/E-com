
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native';
import Header from '../components/Header';
import SubHeader from '../components/Subheader';
import Category from '../components/Category';
import CarouselComponent from '../components/Carousel';
import Services from '../components/Services';
import Dealse from '../components/Deals';
import Brands from '../components/Brands';
import colors from '../Utils/Colours';



const HomeScreen = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={colors.sky} barStyle="dark-content" />
            <Header />
            <SubHeader />
            <Category />
            <CarouselComponent />
            <Services />
            <Dealse />
            <Brands />
        </ScrollView>
    );
};

export default HomeScreen;


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});

