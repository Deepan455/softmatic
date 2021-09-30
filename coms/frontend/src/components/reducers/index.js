import { combineReducers } from 'redux';
import materials from './materials';
import auth from './auth';
import orders from './order';
import products from './product';


export default combineReducers({
    materials,
    orders,
    products,
    auth
});