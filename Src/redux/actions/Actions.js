import { ADD_ADDRESS, ADD_ORDER, ADD_TO_CART, ADD_TO_WISHLIST, REMOVE_ADDRESS, REMOVE_FROM_CART, REMOVE_FROM_WISHLIST, REMOVE_ORDER } from "../Actiontypes"

export const addItemToCart = data => ({
    type: ADD_TO_CART,
    payload: data
});

export const removeItemFromCart = index => ({
    type: REMOVE_FROM_CART,
    payload: index
});

export const addItemToWishlist = data => ({
    type: ADD_TO_WISHLIST,
    payload: data
});

export const removeItemFromWishlist = index => ({
    type: REMOVE_FROM_WISHLIST,
    payload: index
});
export const addAddress = data => ({
    type: ADD_ADDRESS,
    payload: data
});

export const removeAddress = index => ({
    type: REMOVE_ADDRESS,
    payload: index
});
export const addOrder = data => ({
    type: ADD_ORDER,
    payload: data
});
export const removeOrder = index => ({
    type: REMOVE_ORDER,
    payload: index
});