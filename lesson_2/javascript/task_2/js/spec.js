"use strict";

var calculate = require('./calcPermission');

var chai = require('chai');
var expect = chai.expect;

describe('Calculation of permission to buy alcohol test set:', function () {

    it('kids 0-6 years should be not able to buy alcohol', function () {
        expect(calculate(5)).to.equal('Baby where is you parent?');
    });

    it('older kids 6-12 years should be not able to buy alcohol', function () {
        expect(calculate(10)).to.equal('Only soda\'s kid!');
    });

    it('teen age\'s 12 till 18 years should be not able to buy alcohol', function () {
        expect(calculate(15)).to.equal('Could you please wait few years?');
    });

    it('mature people that have 18 years and older should be able to buy alcohol', function () {
        expect(calculate(18)).to.equal('You are free to buy what everything you want');
    });

    it('should be able to work with incorrect data - throw an error');
});