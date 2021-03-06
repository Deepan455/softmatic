import axios from 'axios';
import { ADD_MATERIAL, DELETE_MATERIAL, GET_MATERIAL, APPEND_MATERIAL } from "./types";
import { tokenConfig } from './auth';

export const getMaterials = () => (dispatch, getState) =>{
    console.log("BEfore request");
    axios.get('api/material', tokenConfig(getState))
        .then(res => {
            console.log(res.data);
            dispatch({
                type: GET_MATERIAL,
                payload: res.data
            });
        }) 
        .catch(err => console.log(err));
};

export const addMaterial = (material) => (dispatch, getState) => {
    axios.post('api/material/',material, tokenConfig(getState))
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: ADD_MATERIAL,
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

export const appendMaterial = (material) => (dispatch, getState) => {
    console.log(material.id);
    axios.put(`api/material/${material.id}/`,material,tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: APPEND_MATERIAL,
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

export const deleteMaterial = (id) => (dispatch, getState) => {
    axios.delete(`api/material/${id}`, tokenConfig(getState))
        .then((res) => {
            console.log("deleted");
            console.log(res.data);
            dispatch({
                type: DELETE_MATERIAL,
                payload: id
            });
        })
        .catch(err => console.log(err));
}