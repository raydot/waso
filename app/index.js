
const path = require('path');

//requires
import $ from 'jquery';
import "./scss/base.scss";
import * as json_manip from "./js/json_manip.js";

console.log("path: " + path.resolve(__dirname));

//load the JSON data
//let data_path = path.resolve(__dirname, "json/data.json");
//let data_path = "../json/data.json";
//path.resolve(__dirname, "app/index.js")
json_manip.get_json_data(data_path);



//start
console.log("Hello Williams-Sonoma!");




