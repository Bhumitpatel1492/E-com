import { ADD_ADDRESS, REMOVE_ADDRESS,} from "../Actiontypes";

const AddaddressReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ADDRESS :
            return [...state, action.payload];
        case REMOVE_ADDRESS:
            const deleteArray = state.filter((item, index) => {
                return index !== action.payload
            })

            return deleteArray;

       

        default: return state;
    }

};
export default AddaddressReducer;

