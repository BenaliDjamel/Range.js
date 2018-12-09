(function (global) {
    'use strict';


let Range = (function() {

    function _isFunction(data) {
        return typeof data === 'function';
    }

    function  ContainsChar(min, max) {
    
        if (!Number.isInteger(max)) {
            throw new Error('second param should be an integer')
        }

        if (!Number.isInteger(min)) {
            throw new Error('first param should be an integer')
        }

    }

    class Range {

        constructor(range) {
            if(!range) {
                throw new Error('range is required')
            }
    
            this.range = range.split('..');
            this.min = +this.range[0];
            this.max = +this.range[1];
    
            // check if contains integer and charactere  
            ContainsChar(this.min, this.max)
    
    
            if (this.min === this.max || this.min > this.max) {
    
                throw new Error('second param should be greater than the first param')
            }
    
            if (this.range.length <= 1) {
    
                throw new Error('params is missing')
            }
    
            this.length = (this.max - this.min) + 1;
        }
    
    
    
       
    
    
        each(callBack) {
    
            if(!callBack) {
                throw new Error('callback is required')
            }

            if(!_isFunction(callBack)) {
                throw new Error('callBack should be a function.');
              }
    
            for (let i = this.min; i <= this.max; i++) {
    
                callBack(i);
            }
    
        }
    
        includes(val) {
    
            if(!val) {
                throw new Error('value is required')
            }
            
            if (!Number.isInteger(this.max)) {
                throw new Error('value should be an integer')
            }
    
    
            return this.toArray().includes(val);
        }
    
    
        toArray() {
            let arr = [];
    
            for (let i = this.min; i <= this.max; i++) {
    
                arr.push(i);
            }
            return arr;
        }
    
    
        equals(r) {
            if(!r) {
                throw new Error('range is required')
            }
    
            let min = +r.split('..')[0];
            let max = +r.split('..')[1];
    
            return this.min === min && this.max === max;
        }
    
   
    }

    return Range;
}())

   /* …and here */

    // AMD support
    if (typeof define === 'function' && define.amd) {
        define(function () { return Range; });
    // CommonJS and Node.js module support.
    } else if (typeof exports !== 'undefined') {
        // Support Node.js specific `module.exports` (which can be a function)
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = Range;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` cannot be a function)
        exports.Range = Range;
    } else {
        global.Range = Range;
    }
})(this);




