// import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
// import React from 'react'
// import { useSelector } from 'react-redux';
// import { useNavigation } from '@react-navigation/native';

// const Orderdetails = () => {
//     const navigation = useNavigation();
//     const orders = useSelector(state => state.OrderReducer)
//     return (
//         <View style={style.container}>
//             <View>
//                 <FlatList
//                     data={orders}
//                     renderItem={({ item, index }) => {
//                         return (
//                             <View style={style.mainview}>
//                                 {
//                                     item.items.map((item, index) => {
//                                         return (
//                                             <View style={style.subview}>
//                                                 <Image source={{ uri: item.image }} style={style.img} />
//                                                 <Text style={{ marginLeft: 20, fontSize: 18 }}>{item.name}</Text>
//                                                 <Text style={{ marginLeft: 20 }}>{'total' + item.total}</Text>
//                                             </View>
//                                         )
//                                     })
//                                 }
//                             </View>
//                         )
//                     }
//                     }
//                 />
//             </View>
//         </View>
//     )
// }

// export default Orderdetails
// const style = StyleSheet.create({
//     container: {
//         flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center'
//     },
//     mainview: {
//         width: '100%',
//         height: 100,
//         borderwidth: 0.5,
//         justifyContent: "center",
//         borderColor: '#8c8c8c'
//     },
//     img: {
//         height: 70,
//         width: 70,
//         margintop: 10,
//         marginLeft: 20,
//         marginBottom: 10,
//     },
//     subview: {
//         width: '100%',
//         flexDirection: 'row',
//         alignItems: 'center',
//     },
// })


import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Images from '../Utils/Images';
import colors from '../Utils/Colours';

const OrderDetails = () => {
    const navigation = useNavigation();
    const orders = useSelector(state => state?.OrderReducer);

    return (
        <View style={styles.container}>
            {
                orders?.length == 0 ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                        <Text style={{ fontSize: 18, textAlign: "center", justifyContent: 'center', fontWeight: "600" }}>
                            NO ORDER FOUND
                        </Text>
                    </View>
                ) : (

                    <FlatList
                        data={orders}
                        renderItem={({ item }) => (
                            <View style={styles.orderContainer}>

                                <FlatList
                                    data={item.items}
                                    renderItem={({ item: product }) => (
                                        <View style={styles.itemContainer}>
                                            {product.image && typeof product.image === 'string' ? (
                                                <Image source={{ uri: product.image }} style={styles.image} />
                                            ) :
                                                <Image source={Images.shirts1_icon} style={styles.image} />
                                            }

                                            <View style={styles.textContainer}>
                                                <Text style={styles.name}>{product.name}</Text>
                                                <Text style={styles.total} >{'Total: ₹' + 1049}</Text>
                                            </View>
                                        </View>
                                    )}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                                <Text style={styles.total}>Total: {item.total}</Text>
                                <Text style={styles.address}>Address : {item.address}</Text>
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                    />

                )
            }

        </View>
    );
};

export default OrderDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    orderContainer: {
        marginBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#CCCCCC',
        paddingBottom: 10,
    },
    address: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
        color: colors.black
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
        marginTop: 20
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: colors.black
    },
    total: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 10,
        color: colors.black
    },
});
