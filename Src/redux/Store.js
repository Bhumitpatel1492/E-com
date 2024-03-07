import { createStore } from 'redux';
import rootReducer from './combineReducer'; // Assuming you have reducers defined

const store = createStore(rootReducer);

export default store;
