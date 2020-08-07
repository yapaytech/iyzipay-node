"use strict";

var BaseRequest = require("./BaseRequest"),
  util = require("util");

function GetReportingRequest(request) {
  BaseRequest.call(this, {
    paymentId: request.paymentId,
  });
}

util.inherits(GetReportingRequest, BaseRequest);

module.exports = GetReportingRequest;
