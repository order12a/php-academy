"use strict";

var ViewLogic = require('./view_logic');
var calculate = require('./calculate');

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