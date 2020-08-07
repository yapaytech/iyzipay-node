'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util'),
    Payment = require('./model/Payment');

function CreateIyzilinkRequest(request) {
    BaseRequest.call(this, Payment.body(request));
}

util.inherits(CreateIyzilinkRequest, BaseRequest);

module.exports = CreateIyzilinkRequest;