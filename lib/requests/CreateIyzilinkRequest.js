"use strict";

var BaseRequest = require("./BaseRequest"),
  util = require("util");

function CreateIyzilinkRequest(request) {
  BaseRequest.call(this, request);
}

util.inherits(CreateIyzilinkRequest, BaseRequest);

module.exports = CreateIyzilinkRequest;
