import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const Orderdetails = () => {
    const navigation = useNavigation();
    const orders = useSelector(state => state.OrderReducer)
    return (
        <View style={style.container}>
            <View>
                <FlatList
                    data={orders}
                    renderItem={({ item, index }) => {
                        return (
                            <View style={style.mainview}>
                                {
                                    item.items.map((item, index) => {
                                        return (
                                            <View style={style.subview}>
                                                <Image source={{ uri: item.image }} style={style.img} />
                                                <Text style={{ marginLeft: 20, fontSize: 18 }}>{item.name}</Text>
                                                <Text style={{ marginLeft: 20 }}>{'total' + item.total}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        )
                    }
                    }
                />
            </View>
        </View>
    )
}

export default Orderdetails
const style = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    },
    mainview: {
        width: '100%',
        height: 100,
        borderwidth: 0.5,
        justifyContent: "center",
        borderColor: '#8c8c8c'
    },
    img: {
        height: 70,
        width: 70,
        margintop: 10,
        marginLeft: 20,
        marginBottom: 10,
    },
    subview: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
})