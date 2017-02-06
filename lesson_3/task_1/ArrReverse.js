"use strict";

class ArrReverse{
    reverse(){
        Array.prototype.reverseElements = function () {
            var temp = this.concat();
            var i = temp.length - 1;
            var target = this.length - 1;

            while(i >= 0){
                this[target - i] = temp[i];
                i--;
            }

            return this;
        }
    }
}



module.exports = ArrReverse;