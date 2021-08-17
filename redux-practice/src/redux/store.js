// import {  configureStore, createStore } from '@reduxjs/toolkit' ;

// import userReducer from "./reduxslice" ;

// export default configureStore({
//     reducer: {
//         user:  userReducer
//     }
// })

// configureStore.js

import userReducer from "./reduxslice";
import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const reducers = combineReducers({
  user: userReducer,

  //...
});
const preloadState= {
    userInfo: {
      name: "Enamul",
      email: "enamul@gmail.com",
    },
    pending: null,
    error: false,
  } 
const persistConfig = {
  key: "root1",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
  preloadedState:preloadState 

});

export default store;
