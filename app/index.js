
const path = require("path");

//requires
import $ from "jquery";
import "./scss/base.scss";
import * as json_manip from "./js/json_manip.js";

// load json
const jsonData = require('./json/data.json');
//console.log(jsonPath);

json_manip.parseJSON(jsonData);


//start
console.log("Hello Williams-Sonoma!");




