


import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';  //para la ext del navegador
import reducer from './reducer';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //para el navegador


const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware)) //para hacer peticiones a una Api/servidor

);

export default store;