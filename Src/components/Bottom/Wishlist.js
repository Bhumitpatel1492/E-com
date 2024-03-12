import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromWishlist } from '../../redux/actions/Actions';
import CartItem from '../../common/Cartitem';

const WishlistScreen = () => {
    const [categoryList, setCategoryList] = useState([]);
    const cartData = useSelector(state => state.wishlistReducer);
    const dispatch = useDispatch()
    // setCategoryList(cartData);
    return (
        <View style={style.container}>
            <FlatList
                data={cartData}
                renderItem={({ item, index }) => (
                    <CartItem
                        iswishlist={true} // Assuming this should be a boolean value
                        onRemoveFromWishlist={() => dispatch(removeItemFromWishlist(index))}
                        // onRemoveItem={() => dispatch(removeItemFromWishlist(index))}
                        onAddToCart={(x) => dispatch(addItemToCart(x))}
                        item={item}
                    />
                )}
            />

        </View>
    );
};

export default WishlistScreen;


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});


