
import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, addItemToWishlist, removeItemFromCart, removeItemFromWishlist } from '../../redux/actions/Actions';
import CartItem from '../../common/Cartitem';
import { useNavigation } from '@react-navigation/native';

const AddcartScreen = () => {
    const navigation = useNavigation()
    const [categoryList, setCategoryList] = useState([]);
    const cartData = useSelector(state => state.reducers);
    const dispatch = useDispatch()
    const handleCheckout = () => {
        navigation.navigate('Checkout');
    }
    // console.log('cart---data---->', cartData);
    // setCategoryList(cartData);
    return (
        <View style={style.container}>
            {cartData?.length > 0 ? (
                <FlatList
                    data={cartData}
                    renderItem={({ item, index }) => (
                        <CartItem
                            onRemoveFromWishlist={() => dispatch(removeItemFromWishlist(index))}
                            onRemoveItem={() => dispatch(removeItemFromCart(index))}
                            onAddToCart={(x) => dispatch(addItemToCart(x))}
                            addItemToWishlist={(x) => dispatch(addItemToWishlist(x))}
                            item={item}
                        />
                    )}
                />)
                : (<Text>No item in cart</Text>)
            }


            {cartData?.length > 0 ? (
                <View style={{ height: 150 }}>
                    <TouchableOpacity style={style.loginButton} onPress={() => handleCheckout()}>
                        <Text style={style.loginButtonText}>Checkout</Text>
                    </TouchableOpacity>
                </View>
            ) : null

            }


        </View>
    );
};

export default AddcartScreen;


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    loginButton: {
        marginTop: 10,
        backgroundColor: 'green',
        paddingVertical: 10,
        borderRadius: 5,
        width: '50%',
        alignSelf: 'center',
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
});

