import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const OrderSuccess = () => {
    const navigation = useNavigation();
    const orders = useSelector(state => state.OrderReducer)
    const routes = useRoute()
    return (
        <View style={style.container}>
            {/* <Image source={routes?.params?.status == "success" ? require('../assets/success.png') : require('../assets/failed.png')} style={{ width: 60, height: 60 }} /> */}
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>{routes?.params?.status == "success" ? "Order Placed Successfully" : "Order Failed"}</Text>
            <View>
                <TouchableOpacity style={style.loginButton} onPress={() => navigation.navigate('HomeScreen')}>
                    <Text style={style.loginButtonText}>Continue Shopping</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OrderSuccess
const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})