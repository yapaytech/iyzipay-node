'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util'),

function CreateRefundoBalanceInitRequest(request) {
    BaseRequest.call(this, {
        locale: request['locale'],
        conversationId: request['conversationId'],
        paymentId: request['paymentId'],
        callbackUrl: request["callbackUrl"],
    });
}

util.inherits(CreateRefundoBalanceInitRequest, BaseRequest);

module.exports = CreateRefundoBalanceInitRequest;