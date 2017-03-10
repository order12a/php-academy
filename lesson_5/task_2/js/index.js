"use strict";

(function () {
    window.onload = function () {
        var element = document.getElementById('element');
        var move = false;
        var x;
        var y;
        var posX;
        var posY;
        var initial = true;

        element.onmousedown = function () {
            move = true;
        };

        element.onmouseup = function () {
            move = false;
            initial = true;
        };

        element.onmousemove = function (e) {
            if(move){
                if(initial){
                    x = e.offsetX;
                    y = e.offsetY;
                    initial = false;
                }
                posX = e.pageX - x;
                posY = e.pageY - y;
                this.style.left = posX + 'px';
                this.style.top = posY + 'px';
            }
        };
    };
})();