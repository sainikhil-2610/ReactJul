// it is the place where we store all the user data.

import {createStore} from 'redux';// Actually it is dipricated means it is a traditional way to import.

// Initial State using Object(key: "value")
const initialState = {
      user: { // User is a data
         username: "Nikhil",
         balance: 25000
      }
}

// Action-State 
// it consists of two things i.e is "type" and "payload"
// Add-Money
export const addMoney = (amt) => ({
    type: "addMoney",
    payload: amt
});
// Remove-Money
export const removeMoney = (amt) => ({
    type: "removeMoney",
    payload: amt
});

// Reducer-State
// AddMoney function
function reducer(state = initialState, action) {
    // it accepts the both initial state and action state
      switch(action.type) {
        case "addMoney": 
          return {
            user: {
                username: state.user.username,
                balance: state.user.balance + action.payload
            },
          };
          case "removeMoney":
              return {
                user: {
                    username: state.user.username,
                    balance: state.user.balance - action.payload
                }
              }
          default: 
             return state;
      }
}


const store = createStore(reducer);
export default store;









// import { createStore } from "redux";


// //inital state
// const initialState = {
//   user: {
//     username: "Gamana",
//     balance: 25000,
//   },
// };


// // Action creators
// export const addMoney = (amt) => ({
//   type: "addMoney",
//   payload: amt,
// });


// export const removeMoney = (amt) => ({
//   type: "removeMoney",
//   payload: amt,
// });


// // Reducer
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "addMoney":
//       return {
//         user: {
//           username: state.user.username,
//           balance: state.user.balance + action.payload,
//         },
//       };


//     case "removeMoney":
//       return {
//         user: {
//           username: state.user.username,
//           balance: state.user.balance - action.payload, 
//         },
//       };


//     default:
//       return state;
//   }
// }


// const store = createStore(reducer);
// export default store;