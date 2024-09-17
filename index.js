const { createStore, combineReducers } = require("redux")
// // defining increment
// const INCREMENT ='INCREMENT';
// const DECREMENT ='DECREMENT';
// const ADD_USER ='ADD_USER';

// // state 
// const initialCounterState ={
//     count: 0,
// }

// const initialUsersState ={
//     users:[{name:"sirajul munir"}],
// }

// // action -object-type, payload
// // increment decrement
// const incrementCounter =()=>
// {
//     return {
//         type:INCREMENT,
//     }
// }
// const decrementCounter =()=>
// {
//     return {
//         type:DECREMENT,
//     }
// }

// const addUser =()=>{
//     return {
//         type: ADD_USER,
//         payload:{name:'munir'}
//     }
// }

// // create reducer for counter
// const counterReducer = (state=initialCounterState, action)=>{

//     switch(action.type){
//         case INCREMENT:
//             return {
//                 ...state,
//                 count: state.count + 1
//             }
//         case DECREMENT:
//             return {
//                 ...state,
//                 count: state.count -1
//             }
//         default:
//             state;
//     }
// }



// // 1. state
// // 2. dispatch action
// // 3. reducer
// // 4. store -getState(), dispatch(), subscribe()

// // create store
// const store = createStore(counterReducer)

// store.subscribe(()=>{
//     console.log(store.getState());
// })

// // store dispatch
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(incrementCounter())
// store.dispatch(decrementCounter())

// 2nd example
// state - count:0
// action - increment, decrement, reset
// reducer
// store

// CONSTANTS
// const INCREMENT ='INCREMENT'
// const INCREMENT_BY_VALUE ='INCREMENT_BY_VALUE'
// const DECREMENT ='DECREMENT'
// const RESET = 'RESET'

// const initialState ={
//     users:['munir'],
//     count:0
// }

// const incrementCounterAction =()=>
// {
//    return {
//         type : INCREMENT,
//    }
// }
// const incrementCounterByValue =(value)=>
// {
//    return {
//         type : INCREMENT_BY_VALUE,
//         payload: value
//    }
// }
// const decrementCounterAction =()=>
// {
//    return {
//         type : DECREMENT,
//    }
// }
// const resetCounterAction =()=>
// {
//    return {
//         type : INCREMENT,
//    }
// }

// // creating reducer
// const counterReducer =(state=initialState, action)=>{
// switch (action.type){
//     case INCREMENT:
//         return {
//             ...state,
//             count:state.count +1
//         }
//     case DECREMENT:
//         return {
//             ...state,
//             count:state.count -1
//         }
//     case RESET:
//         return {
//             ...state,
//             count:0,
//         };
//     case INCREMENT_BY_VALUE:
//         return {
//             ...state,
//             count:state.count + action.payload,
//         };
//     default:
//         state;
// }
// }

// // store
// const store = createStore(counterReducer)

// store.subscribe(()=>{
//     console.log(store.getState());
// })

// // store.dispatch(incrementCounterAction());
// // store.dispatch(incrementCounterAction());
// // store.dispatch(incrementCounterAction());
// // store.dispatch(incrementCounterAction());
// // store.dispatch(resetCounterAction());
// store.dispatch(incrementCounterByValue(5));
// store.dispatch(incrementCounterByValue(10));

// -----3rd example-----------

// product reducer

// product constant
const GET_PRODUCTS ="GET_PRODUCTS";
const ADD_PRODUCT ="ADD_PRODUCT";

// product constant
const GET_CART_ITEMS ="GET_CART_ITEMS";
const ADD_CART_ITEM ="ADD_CART_ITEM";

// step-1: state define
const initialProductState = {
    products:["sugar","salt"],
    numberOfProducts: 2
}
// step-1: cart state define
const initialCartState = {
    cart:["sugar"],
    numberOfProducts: 2
}

// product action
const getProducts =(product)=>{
    return {
        type: GET_PRODUCTS,
    };
};
// cart actions
const getCart =(product)=>{
    return {
        type: GET_PRODUCTS,
    };
};

const addProduct =(product)=>{
    return {
        type:ADD_PRODUCT,
        payload:product,
    }
}
const addCart =(product)=>{
    return {
        type:ADD_CART_ITEM,
        payload:product,
    }
}

// product reducer
const productReducer = (state=initialProductState, action)=>{
switch (action.type){
    case GET_PRODUCTS:
        return {
            ...state,
        };
    case ADD_PRODUCT:
        return {
            products: [...state.products, action.payload],
            numberOfProducts: state.numberOfProducts + 1,
        }
    default:
        return state;
}
}

// cart Reducer
const cartReducer = (state=initialCartState, action)=>{
switch (action.type){
    case GET_CART_ITEMS:
        return {
            ...state,
        };
    case ADD_CART_ITEM:
        return {
            cart: [...state.cart, action.payload],
            numberOfProducts: state.numberOfProducts + 1,
        }
    default:
        return state;
}
}

const rootReducer = combineReducers({
    productR: productReducer,
    cartR: cartReducer
})

// store
// const store= createStore(productReducer);
const store= createStore(rootReducer);
store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(getProducts())
store.dispatch(addProduct("mango", "orange"));
store.dispatch(getProducts())
store.dispatch(getCart());
store.dispatch(addCart("mango", "pen"));