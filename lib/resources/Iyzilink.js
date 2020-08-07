'use strict';

var IyzipayResource = require('../IyzipayResource');

function Iyzilink() {
    this._config = arguments[0];
    this._api = {
        fastlink: {
            path: '/iyzilink/products',
            method: 'POST',
            requestModel: 'CreateIyzilinkRequest'
        }
    };
}

Iyzilink.prototype = new IyzipayResource();

module.exports = Iyzilink;