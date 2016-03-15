'use strict';

var IyzipayResource = require('../IyzipayResource');

function BKMInitialize() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/payment/iyzipos/bkm/initialize/ecom',
            method: 'POST',
            requestModel: 'CreateBkmInitializeRequest'
        }
    };
}

BKMInitialize.prototype = new IyzipayResource();

module.exports = BKMInitialize;