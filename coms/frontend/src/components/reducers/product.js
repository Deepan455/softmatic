import {ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, APPEND_PRODUCT} from "../actions/types.js";
const initialState = {
    products: []
};


export default function(state = initialState, action){
    console.log("product reducerin");
    switch(action.type){
        case GET_PRODUCT:
            return{
                ...state,
                products: action.payload
            };
        
        case ADD_PRODUCT:
            return{
                ...state,
                products: [...state.products, action.payload]
            };
        
        case DELETE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(products => products.id != action.payload)
            };
        
        case APPEND_PRODUCT:
            console.log(state.products);
            console.log(action.payload);
            return{
                ...state,
                products: [...state.products.filter(products => products.id != action.payload.id), action.payload]
            }
        
        default:
            return state;
    }
}