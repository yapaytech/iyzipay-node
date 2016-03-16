'use strict';

var IyzipayResource = require('../IyzipayResource');

function ConnectThreeDsInitialize() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/payment/iyziconnect/initialize3ds',
            method: 'POST',
            requestModel: 'CreateConnectThreeDSInitializeRequest'
        }
    };
}

ConnectThreeDsInitialize.prototype = new IyzipayResource();

module.exports = ConnectThreeDsInitialize;