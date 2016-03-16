'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util'),
    PostPayment = require('./model/PostPayment');

function CreatePaymentPostAuthRequest(request) {

    BaseRequest.call(this, PostPayment.body(request));
}

util.inherits(CreatePaymentPostAuthRequest, BaseRequest);

module.exports = CreatePaymentPostAuthRequest;