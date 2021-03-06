import {createStore, combineReducers} from 'redux';
import serviceListReducer from '../reducers/serviceListReducer';
import serviceAddReducer from '../reducers/serviceAddReducer';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer,
});

const store = createStore(reducer);

export default store;
