'use strict';

var IyzipayResource = require('../IyzipayResource');

function Reporting() {
    this._config = arguments[0];
    this._api = {
        create: {
            path: '/v2/reporting/payment/details',
            method: 'GET',
            queryString: 'GetReportingRequest'
        }
    };
}

Reporting.prototype = new IyzipayResource();

module.exports = Reporting;