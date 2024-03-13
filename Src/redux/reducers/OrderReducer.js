import { ADD_ORDER, REMOVE_ORDER } from "../Actiontypes";

const OrderReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ORDER:
            return [...state, action.payload];
        case REMOVE_ORDER:
            const deleteArray = state.filter((item, index) => {
                return index !== action.payload
            })

            return deleteArray;



        default: return state;
    }

};
export default OrderReducer;

