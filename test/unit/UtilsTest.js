var assert = require('assert'),
    should = require('should'),
    utils = require('../../lib/utils');

describe('Iyzipay', function () {

    it('should convert integer price', function (done) {
        var price = utils.asPrice('1');
        console.log(price);
        price.should.be.equal('1.0');
        done();
    });

    it('should convert float price', function (done) {
        var price = utils.asPrice('1.0');
        console.log(price);
        price.should.be.equal('1.0');
        done();
    });
});