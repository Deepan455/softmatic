import {ADD_MATERIAL, DELETE_MATERIAL, GET_MATERIAL, APPEND_MATERIAL} from "../actions/types.js";
const initialState = {
    materials: []
};


export default function(state = initialState, action){
    console.log("materialreducerin");
    switch(action.type){
        case GET_MATERIAL:
            return{
                ...state,
                materials: action.payload
            };
        
        case ADD_MATERIAL:
            return{
                ...state,
                materials: [...state.materials, action.payload]
            };
        
        case DELETE_MATERIAL:
            return{
                ...state,
                materials: state.materials.filter(materials => materials.id != action.payload)
            };
        
        case APPEND_MATERIAL:
            console.log(state.materials);
            console.log(action.payload);
            return{
                ...state,
                materials: [...state.materials.filter(materials => materials.id != action.payload.id), action.payload]
            }
        
        default:
            return state;
    }
}