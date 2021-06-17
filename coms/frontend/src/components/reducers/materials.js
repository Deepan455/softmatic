import {ADD_MATERIAL, GET_MATERIAL} from "../actions/types.js";
const initialState = {
    materials: []
};
export default function(state = initialState, action){
    switch(action.type){
        case GET_MATERIAL:
                return{
                    ...state,
                    materials: action.payload
            };
        
        case ADD_MATERIAL:
            return{
                ...state,
                materials: [...state.material, action.payload]
            };
            
        default:
            return state;
    }
}