'use strict';

var IyzipayResource = require('../IyzipayResource');

function BKMAuth() {
    this._config = arguments[0];
    this._api = {
        retrieve: {
            path: '/payment/iyzipos/bkm/auth/ecom/detail',
            method: 'POST',
            requestModel: 'RetrieveBkmAuthRequest'
        }
    };
}

BKMAuth.prototype = new IyzipayResource();

module.exports = BKMAuth;