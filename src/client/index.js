//client/index. js
import React from 'react';
import ReactDom from 'react-dom';
import Home from '../containers/Home.js';

ReactDom.hydrate(<Home />, document.getElementById('root'))