/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/index.js":
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _jquery = __webpack_require__(/*! jquery */ \"jquery\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\n__webpack_require__(/*! ./scss/base.scss */ \"./app/scss/base.scss\");\n\nvar _json_manip = __webpack_require__(/*! ./js/json_manip.js */ \"./app/js/json_manip.js\");\n\nvar json_manip = _interopRequireWildcard(_json_manip);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//start\nconsole.log(\"Hello Williams-Sonoma!\");\n\n//requires\n\n\nvar url = \"https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json&?callback=?\";\n//json_manip.get_json_data(url);\njson_manip.help_out_a_brother(url);\n\n//# sourceURL=webpack:///./app/index.js?");

/***/ }),

/***/ "./app/js/json_manip.js":
/*!******************************!*\
  !*** ./app/js/json_manip.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.get_json_data = get_json_data;\nexports.help_out_a_brother = help_out_a_brother;\n//console.log(\"starting jason_manip\");\n// let url = \"https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json\";\n// get_json_data(url);\n\n// let url = \"https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json\";\n// get_json_data(url);\n\n\n//exported functions\nfunction get_json_data(url) {\n  //url += \"&callback=?\";\n  //console.log('url: ' + url);\n  // $.getJSON(url, {\n  // \tformat: \"json\"\n  // })\n  // .done(function (data) {\n  // \tconsole.log(\"data: \" + data);\n  // \tlet items = [];\n  // \t$.each( data, function( key, val ) {\n  // \t\titems.push( \"{\" + key + \":\" + value + \"}\" );\n  // \t});\n\n  // \tconsole.log(items);\n\n  // \t// $( \"<ul/>\", {\n  // \t// \t\"class\": \"my-new-list\",\n  // \t// \thtml: items.join( \"\" )\n  // \t// }).appendTo( \"myDiv\" );\n  // });\n  $.get(url).done(function (data) {\n    console.log(data);\n  });\n} //get_json_data\n\nfunction help_out_a_brother(url) {\n  console.log(\"Help him out!\");\n  $.ajax({\n    url: url,\n    type: 'GET',\n    dataType: 'json',\n    crossDomain: true,\n    success: function success(data, textStatus, xhr) {\n      console.log(data);\n    },\n    error: function error(xhr, textStatus, errorThrown) {\n      console.log(errorThrown);\n    }\n  });\n}\n\n/*  THIS WORKS!  //\n(function() {\n\tconsole.log(\"Here we go!\");\n  var flickerAPI = \"http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?\";\n  $.getJSON( flickerAPI, {\n    tags: \"mount rainier\",\n    tagmode: \"any\",\n    format: \"json\"\n  })\n    .done(function( data ) {\n      // $.each( data.items, function( i, item ) {\n      //   $( \"<img>\" ).attr( \"src\", item.media.m ).appendTo( \"#images\" );\n      //   if ( i === 3 ) {\n      //     return false;\n      //   }\n      // });\n      let items = [];\n      \t$.each( data, function( key, val ) {\n\t\t\t\titems.push( \"<li id='\" + key + \"'>\" + val + \"</li>\" );\n\t\t\t});\n\n\t\t\t$( \"<ul/>\", {\n\t\t\t\t\"class\": \"my-new-list\",\n\t\t\t\thtml: items.join( \"\" )\n\t\t}).appendTo( \"body\" );\n    });\n})();\n*/\n\n//# sourceURL=webpack:///./app/js/json_manip.js?");

/***/ }),

/***/ "./app/scss/base.scss":
/*!****************************!*\
  !*** ./app/scss/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./app/scss/base.scss?");

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi jquery ./app/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! jquery */\"jquery\");\nmodule.exports = __webpack_require__(/*! /Users/dave/Documents/Waso/app/index.js */\"./app/index.js\");\n\n\n//# sourceURL=webpack:///multi_jquery_./app/index.js?");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = jQuery;\n\n//# sourceURL=webpack:///external_%22jQuery%22?");

/***/ })

/******/ });