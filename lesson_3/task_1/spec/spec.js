var chai = require('chai');
var expect = chai.expect;

require('../ArrReverse');

describe('reverse of array elements tests', function () {
    var arrReverse;

    it('should reverse array', function () {
        var arr = [1, 2, 3, 4, 5];
        var expectedArr = [5, 4, 3, 2, 1];

        expect(arr.reverseElements()).to.deep.equal(expectedArr);
    });
});