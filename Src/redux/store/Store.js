import { createStore } from 'redux';
import reducers from '../reducers/Reducer';
import { combineReducers } from 'redux';
import wishlistReducer from '../reducers/wishlistreducer';

const routeReducer = combineReducers({
    reducers,wishlistReducer
});
const store = createStore(routeReducer);

export default store;
