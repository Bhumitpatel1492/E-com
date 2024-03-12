
import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from '../../redux/actions/Actions';
import CartItem from '../../common/Cartitem';

const AddcartScreen = () => {
    const [categoryList, setCategoryList] = useState([]);
    const cartData = useSelector(state => state.Reducer);
    const dispatch = useDispatch()
    // setCategoryList(cartData);
    return (
        <View style={style.container}>
            <FlatList
                data={cartData}
                renderItem={({ item, index }) => (
                    <CartItem
                        onAddToCart={(x) => onAddToWishlist(x)}
                        onRemoveItem={() => {
                            dispatch(removeItemFromCart(index));
                        }}
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

