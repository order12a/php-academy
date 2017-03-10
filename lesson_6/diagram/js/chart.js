"use strict";

window.addEventListener("load", function () {
    var chart = createBarChart([30, 36, 88, 91, 22, 45, 100, 150, 200], 600, 900, "green");

    var container = document.getElementById("chartContainer");
    container.appendChild(chart);
});

function createBarChart(data, x, y, color) {

    var chart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    chart.style.width = x;
    chart.style.height = y;

    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0; i < data.length; i++) {
        if (max < data[i]) max = data[i];
    }

    var scale = x / max;
    var barHeight = Math.floor(x / data.length);

    for (var i = 0; i < data.length; i++) {
        var bar = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        var text = document.createElementNS("http://www.w3.org/2000/svg", "text");

        var barLength = data[i] * scale;
        bar.setAttribute("width", barLength + "px");
        bar.setAttribute("height", barHeight - 4 + "px");
        text.setAttribute("width", barLength + "px");
        text.setAttribute("height", barHeight - 4 + "px");

        bar.setAttribute("x", 0);
        bar.setAttribute("y", barHeight * i);
        text.setAttribute("x", 5);
        text.setAttribute("y", barHeight * i + barHeight/2);

        bar.style.fill = color;
        bar.style.fillOpacity = 0.75;
        text.textContent = data[i];
        text.style.fill = 'white';

        bar.addEventListener("mouseover", onOver);
        bar.addEventListener("mouseout", onOut);

        chart.appendChild(bar);
        chart.appendChild(text);
    }

    function onOver() { this.style.fill = "red"; }
    function onOut() { this.style.fill = color; }

    return chart;
}