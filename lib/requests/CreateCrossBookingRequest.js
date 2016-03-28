'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util');

function CreateCrossBookingRequest(request) {

    BaseRequest.call(this, {
        locale: request['locale'],
        conversationId: request['conversationId'],
        subMerchantKey: request['subMerchantKey'],
        price: request['price'],
        reason: request['reason']
    });
}

util.inherits(CreateCrossBookingRequest, BaseRequest);

module.exports = CreateCrossBookingRequest;