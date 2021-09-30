import {ADD_ORDER, DELETE_ORDER, GET_ORDER, APPEND_ORDER} from "../actions/types.js";
const initialState = {
    orders: []
};

export default function(state = initialState, action){
    console.log("orderreducerin");
    switch(action.type){
        case GET_ORDER:
            return{
                ...state,
                orders: action.payload
            };
        
        case ADD_ORDER:
            return{
                ...state,
                orders: [...state.orders, action.payload]
            };
        
        case DELETE_ORDER:
            return{
                ...state,
                orders: state.orders.filter(orders => orders.id != action.payload)
            };
        
        case APPEND_ORDER:
            console.log(state.orders);
            console.log(action.payload);
            return{
                ...state,
                orders: [...state.orders.filter(orders => orders.id != action.payload.id), action.payload]
            }
        
        default:
            return state;
    }
}