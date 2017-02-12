"use strict";

var buildChessDesk = function () {

    var marker = 1;
    var container = document.getElementsByClassName('container')[0];
    var index = 10;

    for (var i = 0; i < index; i++) {
        var row = container.appendChild(document.createElement('div'))
        for (var y = 0; y < index; y++) {
            if (marker % 2 === 1 || marker === 1) {
                var whiteBox = document.createElement('span');
                whiteBox.setAttribute('class', 'white');
                row.appendChild(whiteBox);
                marker++;
            } else {
                var blackBox = document.createElement('span');
                blackBox.setAttribute('class', 'black');
                row.appendChild(blackBox);
                marker++;
            }
        }
        marker++;
    }
};




