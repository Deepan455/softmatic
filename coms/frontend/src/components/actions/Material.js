import axios from 'axios';
import { ADD_MATERIAL, GET_MATERIAL } from "./types";

console.log("Hola amigo");
export const getMaterials = () => (dispatch) =>{
    console.log("BEfore request");
    axios.get('api/material')
        .then(res => {
            console.log("we got here");
            console.log(res.data);
            dispatch({
                type: GET_MATERIAL,
                payload: res.data
            });
        }) 
        .catch(err => console.log(err));
};

export const addMaterial = (material) => (dispatch) => {
    axios.post('api/material/',material)
        .then((res) => {
            dispatch({
                type: ADD_MATERIAL,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}