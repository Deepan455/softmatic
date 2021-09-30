import axios from 'axios';
import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, APPEND_PRODUCT } from "./types";
import { tokenConfig } from './auth';

export const getProducts = () => (dispatch, getState) =>{
    console.log("BEfore request");
    axios.get('api/product', tokenConfig(getState))
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_PRODUCT,
                payload: res.data
            });
        }) 
        .catch(err => console.log(err));
};

export const addProduct = (product) => (dispatch, getState) => {
    axios.post('api/product/',product, tokenConfig(getState))
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: ADD_PRODUCT,
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

export const appendProduct = (product) => (dispatch, getState) => {
    console.log(product.id);
    axios.put(`api/product/${product.id}/`, product,tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: APPEND_PRODUCT,
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

export const deleteProduct = (id) => (dispatch, getState) => {
    axios.delete(`api/product/${id}`, tokenConfig(getState))
        .then((res) => {
            console.log("deleted");
            console.log(res.data);
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            });
        })
        .catch(err => console.log(err));
}
