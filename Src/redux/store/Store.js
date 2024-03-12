import { createStore } from 'redux';
import reducers from '../reducers/Reducer';
import { combineReducers } from 'redux';
import wishlistReducer from '../reducers/wishlistreducer';
import AddaddressReducer from '../reducers/AddaddressReducer'

const routeReducer = combineReducers({
    reducers, wishlistReducer, AddaddressReducer
});
const store = createStore(routeReducer);

export default store;
