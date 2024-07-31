import React, { useState } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import { addItemToCart, addItemToWishlist, removeItemFromCart, removeItemFromWishlist } from '../../redux/actions/Actions';
import CartItem from '../../common/Cartitem';

const WishlistScreen = () => {
    const [categoryList, setCategoryList] = useState([]);
    // const cartData = useSelector(state => state.wishlistReducer);
    // const dispatch = useDispatch()
    // setCategoryList(cartData);
    return (
        <View style={style.container}>
            {
                cartData?.length == 0 ? (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                        <Text style={{ fontSize: 18, textAlign: "center", justifyContent: 'center', fontWeight: "600" }}>
                            NO ITEM FOUND
                        </Text>
                    </View>
                ) : (
                    <FlatList
                        data={cartData}
                        renderItem={({ item, index }) => (
                            <CartItem
                                iswishlist={true}
                                onRemoveFromWishlist={() => dispatch(removeItemFromWishlist(index))}
                                onRemoveItem={() => dispatch(removeItemFromCart(index))}
                                onAddToCart={(x) => dispatch(addItemToCart(x))}
                                addItemToWishlist={(x) => dispatch(addItemToWishlist(x))}
                                item={item}
                            />
                        )}
                    />
                )
            }


        </View>
    );
};

export default WishlistScreen;


const style = StyleSheet.create({
    container: {
        flex: 1,
    },
});


