'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util');

function CreateRefundRequest(request) {

    BaseRequest.call(this, {
        locale: request['locale'],
        conversationId: request['conversationId'],
        paymentTransactionId: request['paymentTransactionId'],
        price: request['price'],
        ip: request['ip']
    });
}

util.inherits(CreateRefundRequest, BaseRequest);

module.exports = CreateRefundRequest;