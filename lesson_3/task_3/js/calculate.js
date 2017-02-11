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