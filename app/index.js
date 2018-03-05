
const path = require('path');

//requires
import $ from 'jquery';
import './scss/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Global from './components/Global'

//import * as json_manip from './js/json_manip.js';

// load json
//const jsonData = require('./json/data.json');
//console.log(jsonPath);

//let dataVar = json_manip.parseJSON(jsonData);
//console.log("DataVar: " + dataVar)

//start
console.log("Hello Williams-Sonoma!");


//ARROW FUNCTIONS!
// let peg = () => {
// 	console.log("Yup!");
// };

// peg();



//JSX -- not html!

ReactDOM.render(
	<Global />, document.getElementById('root')
);
