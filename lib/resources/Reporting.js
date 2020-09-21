"use strict";

var IyzipayResource = require("../IyzipayResource");

function Reporting() {
  this._config = arguments[0];
  this._api = {
    retrieve: {
      path: "/v2/reporting/payment/details",
      method: "GET",
      queryString: "GetReportingRequest",
    },

    transaction: {
      path: "/v2/reporting/payment/transactions",
      method: "GET",
      queryString: "GetTransactionRequest",
    },
  };
}

Reporting.prototype = new IyzipayResource();

Reporting.prototype.transaction = function (params, cb) {
  this._config.body = params;
  this._request("transaction", function (err, res, body) {
    cb(err, body);
  });
};

module.exports = Reporting;
