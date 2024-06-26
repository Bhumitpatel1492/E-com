// import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../Actiontypes";

// const wishlistreducer = (state = [], action) => {
//     switch (action.type) {
//         case ADD_TO_WISHLIST:
//             return [...state, action.payload];
//         case REMOVE_FROM_WISHLIST:
//             const deleteArrayWishList = state.filter((item, index) => {
//                 return index !== action.payload
//             })

//             return deleteArrayWishList;

//         default: return state;
//     }

// };
// export default wishlistreducer;

import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../Actiontypes";

const wishlistReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_TO_WISHLIST:
            return [...state, action.payload];
        case REMOVE_FROM_WISHLIST:
            return state.filter((item, index) => index !== action.payload);
        default:
            return state;
    }
};

export default wishlistReducer;
