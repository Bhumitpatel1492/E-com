import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import colors from '../Utils/Colours';
import { useNavigation } from '@react-navigation/native';
import { ReturnData } from '../Data/ReturnData';

const ReturnPolicy = () => {
    const navigation = useNavigation()
    return (
        <ScrollView horizontal style={styles.container} showsVerticalScrollIndicator={false}>
            {ReturnData.map((item) => (
                <TouchableOpacity key={item.id} style={styles.Categoryview}>
                    <Image source={item.image} style={styles.imgStyle} tintColor={colors.white} />
                    <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
            ))}

        </ScrollView>
    );
};

export default ReturnPolicy;

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 10
    },
    imgStyle: {
        height: 50,
        width: 50,
        // backgroundColor: colors.white
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

