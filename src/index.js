import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { rootReducer } from './reducers/rootReducer'
import AppContainer from './App'


const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.querySelector('#root'));

