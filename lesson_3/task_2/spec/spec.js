var chai = require('chai');
var expect = chai.expect;

var arraySort = require('../ArraySort');

describe('sort of array with numbers tests', function () {

    it('should sort array with growing order', function () {
        var arr = [5, 1, 4, 3, 2];
        var expectedArr = [1, 2, 3, 4, 5];

        expect(arr.sort(arraySort)).to.deep.equal(expectedArr);
    });
});