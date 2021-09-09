//client/index. js
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from'react-router-dom'
import Router from'../routes'
import { Provider } from 'react-redux'
import getStore from '../store'

const App = () => {
    return (
        <Provider store={getStore()}>
           <BrowserRouter>
               {Router}
           </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(<App />, document.getElementById('root'))
