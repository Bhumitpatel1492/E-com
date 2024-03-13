import { createStore } from 'redux';
import reducers from '../reducers/Reducer';
import { combineReducers } from 'redux';
import wishlistReducer from '../reducers/wishlistreducer';
import AddaddressReducer from '../reducers/AddaddressReducer';
import OrderReducer from '../reducers/OrderReducer'

const routeReducer = combineReducers({
    reducers, wishlistReducer, AddaddressReducer, OrderReducer
});
const store = createStore(routeReducer);

export default store;
