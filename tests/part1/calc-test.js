var chai = require('chai');
var calculator = require('./../../src/part1/calculator');
var expect = chai.expect;

describe("Unit testing calc",function(){
    it("test-add functionality",function(){
        expect(calculator.add(1,2)).to.equal(3);
    });
     it("test-add functionality",function(){
        expect(calculator.add(10,30)).to.equal(40);
    });
     it("test-subtract functionality",function(){
        expect(calculator.subtract(10,2)).to.equal(8);
    });
});