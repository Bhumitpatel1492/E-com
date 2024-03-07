import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import Images from '../Utils/Images';
import colors from '../Utils/Colours';
import { Categories } from '../Data/Categories';
import { useNavigation } from '@react-navigation/native';

const Category = () => {
    const navigation = useNavigation()
    return (
        <ScrollView horizontal style={styles.container} showsVerticalScrollIndicator={false}>
            {Categories.map((item) => (
                <TouchableOpacity key={item.id} style={styles.Categoryview}
                    onPress={() => navigation.navigate('HomeStack', { screen: 'Product' })}>
                    <Image source={item.image} style={styles.imgStyle} />
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
            ))}

        </ScrollView>
    );
};

export default Category;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 10
    },
    imgStyle: {
        height: 50,
        width: 50
    },
    title: {
        fontSize: 10,
        color: colors.default_black
    },
    Categoryview: {
        padding: 8,
        alignItems: 'center'
    }
});

