"use strict";

var buildChessDesk = function () {
    // document.onreadystatechange = function () {
    //     if (document.readyState === "complete") {
    //         build();
    //     }
    // };

    // window.onload = function () {
    //     build();
    // }

    var marker = 1;
    var container = document.getElementsByClassName('container')[0];

    for(var i = 0; i < 8; i++){
        var row = container.appendChild(document.createElement('div'))
        for (var y = 0; y < 8; y++){
            if(marker % 2 === 1 || marker === 1){
                console.log('We create white element');
                var whiteBox = document.createElement('span');
                whiteBox.setAttribute('class', 'white');
                row.appendChild(whiteBox);
                marker++;
            }else {
                console.log('We create black element');
                var blackBox = document.createElement('span');
                blackBox.setAttribute('class', 'black');
                row.appendChild(blackBox);
                marker++;
            }
        }
        marker++;
    }
};




