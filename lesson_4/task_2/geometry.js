"use strict";

function Figure(name, color) {
    this.name = name;
    this.color = color;
    this.sayArea = function () {
        console.log(this.area());
    };
}

let figure = new Figure('line', 'green');

function Circle(name, color, radius) {
    this.name = name;
    this.color = color;
    this.radius = radius;
}

Circle.prototype = figure;
var circle = new Circle('circle', 'blue', 20);
circle.area = function () {
    return (Math.PI * ((this.radius * this.radius)/2));
};

function Triangle(name, color, catet_a, catet_b, hypotenuse) {
    this.name = name;
    this.color = color;
    this.catet_a = catet_a;
    this.catet_b = catet_b;
    this.hypotenuse = hypotenuse;
}

Triangle.prototype = figure;
var triangle = new Triangle('triangle', 'yellow', 30, 30, 40);
triangle.area = function () {
    let S = (this.hypotenuse + this.catet_a + this.catet_b)/2;
    return Math.sqrt(S * (S - this.hypotenuse) * (S - this.catet_a) * (S - this.catet_b));
};

function Square(name, color, height, width) {
    this.name = name;
    this.color = color;
    this.height = height;
    this.width = width;
}

Square.prototype = figure;

var square = new Square('square', 'red', 22, 12);
square['area'] = function () {
    return this.height * this.width;
};

triangle.sayArea();
circle.sayArea();
square.sayArea();


