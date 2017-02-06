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
