import { ADD_TO_CART } from '../redux/Action';

const initialState = {
    cartItems: [] // Assuming this is your initial state for cart items
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload],
            };
        default:
            return state;
    }
};

export default cartReducer;
