var chai = require('chai');
var expect = chai.expect;

var ArrReverse = require('../ArrReverse');

describe('reverse of array elements tests', function () {
    var arrReverse;

    before(function () {
        arrReverse = new ArrReverse();
    });

    it('should reverse array', function () {
        arrReverse.reverse();
        var arr = [1, 2, 3, 4, 5];
        var expectedArr = [5, 4, 3, 2, 1];

        expect(arr.reverseElements()).to.deep.equal(expectedArr);
    });
});