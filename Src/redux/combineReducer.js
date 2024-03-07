import { combineReducers } from 'redux';
import cartReducer from '../redux/Addtocartreducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    // Add more reducers here if you have
});

export default rootReducer;
