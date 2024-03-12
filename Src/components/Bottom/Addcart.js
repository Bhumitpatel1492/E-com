
import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, addItemToWishlist, removeItemFromCart, removeItemFromWishlist } from '../../redux/actions/Actions';
import CartItem from '../../common/Cartitem';

const AddcartScreen = () => {
    const [categoryList, setCategoryList] = useState([]);
    const cartData = useSelector(state => state.reducers);
    const dispatch = useDispatch()

    // console.log('cart---data---->', cartData);
    // setCategoryList(cartData);
    return (
        <View style={style.container}>
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
            />

        </View>
    );
};

export default AddcartScreen;


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});

