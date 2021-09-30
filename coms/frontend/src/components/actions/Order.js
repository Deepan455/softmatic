import axios from 'axios';
import { ADD_ORDER, DELETE_ORDER, GET_ORDER, APPEND_ORDER } from "./types";
import { tokenConfig } from './auth';

export const getOrders = () => (dispatch, getState) =>{
    console.log("BEfore request");
    axios.get('api/order', tokenConfig(getState))
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_ORDER,
                payload: res.data
            });
        }) 
        .catch(err => console.log(err));
};

export const addOrder = (order) => (dispatch, getState) => {
    axios.post('api/order/',order, tokenConfig(getState))
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: ADD_ORDER,
                payload: res.data
            });
        })
        .catch(err => {
            console.log("Hello");
            console.log(err.response.status);
            if(err.response.status == 400)
            {    
                console.log("The entry already exists. If you meant to edit click on append");
            }
            else
            {
                console.log(err);
            }
        });
}

export const appendOrder = (order) => (dispatch, getState) => {
    console.log(order.id);
    axios.put(`api/product/${order.id}/`,order,tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: APPEND_ORDER,
                payload: res.data
            });
        })
        .catch(
            err => {
            console.log("Hello");
            console.log(err.response.status);
            if(err.response.status == 404)
            {    
                alert("The entry doesn't exist. Create a new one");
            }
            else
            {
                console.log(err);
            }
        });
}

export const deleteOrder = (id) => (dispatch, getState) => {
    axios.delete(`api/order/${id}`, tokenConfig(getState))
        .then((res) => {
            console.log("deleted");
            console.log(res.data);
            dispatch({
                type: DELETE_ORDER,
                payload: id
            });
        })
        .catch(err => console.log(err));
}