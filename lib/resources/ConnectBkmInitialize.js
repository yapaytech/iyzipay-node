'use strict';

var IyzipayResource = require('../IyzipayResource');

function ConnectBKMInitialize() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/payment/iyziconnect/bkm/initialize',
            method: 'POST',
            requestModel: 'CreateConnectBkmInitializeRequest'
        }
    };
}

ConnectBKMInitialize.prototype = new IyzipayResource();

module.exports = ConnectBKMInitialize;