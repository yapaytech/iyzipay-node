'use strict';

var IyzipayResource = require('../IyzipayResource');

function ConnectThreeDsAuth() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/payment/iyziconnect/auth3ds',
            method: 'POST',
            requestModel: 'CreateConnectThreeDSAuthRequest'
        }
    };
}

ConnectThreeDsAuth.prototype = new IyzipayResource();

module.exports = ConnectThreeDsAuth;