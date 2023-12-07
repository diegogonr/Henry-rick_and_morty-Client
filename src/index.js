import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
       <ChakraProvider>
        <App />
       </ChakraProvider>

    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
