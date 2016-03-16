'use strict';

var IyzipayResource = require('../IyzipayResource');

function ThreeDsInitialize() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/payment/iyzipos/initialize3ds/ecom',
            method: 'POST',
            requestModel: 'CreateThreeDSInitializeRequest'
        }
    };
}

ThreeDsInitialize.prototype = new IyzipayResource();

module.exports = ThreeDsInitialize;