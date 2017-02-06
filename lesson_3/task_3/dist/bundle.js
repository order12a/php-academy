var EntryPoint =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var calculate = function (val1, val2, operator) {
    switch(operator) {
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case '*':
            return val1 * val2;
        case '/':
            return val1 / val2;
        case '%':
            return val1 % val2;
        default:
            return 'Incorrect operator was entered!';
    }
}

module.exports = calculate;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var viewLogic = function(){

    this.validateInput = function(val1, val2){
        if(isNaN(val1) || isNaN(val2)){
            document.getElementById('err_v').innerHTML = 'First or second value was not a number! Please set correct data.';
            if(document.getElementById('wrong_action').textContent.length > 0 || document.getElementById('result').textContent.length > 0){
                removeElement('wrong_action');
                removeElement('result');
            }
            return false;
        }else {
            if(document.getElementById('err_v').textContent.length > 0){
                removeElement('err_v');
            }
            return true;
        }
    };

    this.writeIntoDOM = function (calculateFunction) {
        if(isNaN(calculateFunction)){
            if(document.getElementById('result').textContent.length > 0){
                removeElement('result');
            }
            document.getElementById('wrong_action').removeAttribute('hidden');
        }else {
            if(document.getElementById('wrong_action').textContent.length > 0){
                removeElement('wrong_action');
            }
            document.getElementById('result').removeAttribute('hidden');
            document.getElementById('result').setAttribute('class', 'col-md-5 left alert alert-success');
            document.getElementById('result').innerHTML = 'The result is: ' + calculateFunction;
        }
    };

    var removeElement = function (element_id) {
        document.getElementById(element_id).setAttribute('hidden', 'hidden');
    }
}

module.exports = viewLogic;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ViewLogic = __webpack_require__(1);
var calculate = __webpack_require__(0);

module.exports = {
        run:function () {

        var view = new ViewLogic(); 

        var val1 = Number(prompt('Enter value 1: ', '0'));
        var val2 = Number(prompt('Enter value 2: ', '0'));
        var operator = prompt('Enter required operation: ');

        if(!view.validateInput(val1, val2)){
                return;
        }
        view.writeIntoDOM(calculate(val1, val2, operator));
    }
}

/***/ })
/******/ ]);