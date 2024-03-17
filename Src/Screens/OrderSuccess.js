import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation, useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const OrderSuccess = () => {
    const navigation = useNavigation();
    const orders = useSelector(state => state?.OrderReducer)
    const routes = useRoute()
    return (
        <View style={style.container}>

            <LottieView source={routes?.params?.status == "success" ? require('../../Assets/lottifiles/Animation - 1710650758750.json') : require('../../Assets/lottifiles/Animation - 1710650792936.json')} style={{ height: 250, width: 250, }} autoPlay loop />
            <Text style={{ fontSize: 25, fontWeight: 'bold', marginBottom: 20 }}>{routes?.params?.status == "success" ? "Order Placed Successfully" : "Order Failed"}</Text>
            <View style={{ width: "70%" }}>
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
    loginButton: {
        marginTop: 10,
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 5,
        width: '100%',
        alignSelf: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
})