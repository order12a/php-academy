"use strict";


var app = function () {
    var counter = 0;
    var intervalHandler = null;
    var isRunning = false;

    function increaseCounter() {
        $('output').innerHTML = counter;
        counter++;
    }

    $('start').onclick = function () {
        if(isRunning){
            return;
        }else {
            intervalHandler = setInterval(increaseCounter, 10);
            isRunning = true;
        }
    };

    $('stop').onclick = function () {
        if(isRunning){
            clearInterval(intervalHandler);
            isRunning = false;
        }else {
            return;
        }
    };

    $('reset').onclick = function () {
        clearInterval(intervalHandler);
        $('output').innerHTML = '____';
        counter = 0;
        intervalHandler = null;
        isRunning = false;
    };
};

var $ = function (id) {
    return document.getElementById(id);
};