
const path = require('path');

//requires
//import $ from 'jquery';
import './scss/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Global from './components/Global'

console.log("Hello Williams-Sonoma!");

 ReactDOM.render(
 	<Global />, document.getElementById('root')
 );
