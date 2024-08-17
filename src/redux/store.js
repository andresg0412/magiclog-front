import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import { thunk } from 'redux-thunk';
import productsReducer from './reducers/productReducer';

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});


export default store;
