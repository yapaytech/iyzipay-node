'use strict';

var IyzipayResource = require('../IyzipayResource');

function Reporting() {
    this._config = arguments[0];
    this._api = {
        retrieve: {
            path: '/v2/reporting/payment/details',
            method: 'GET',
            queryString: 'GetReportingRequest'
        }
    };
}

Reporting.prototype = new IyzipayResource();

module.exports = Reporting;