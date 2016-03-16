'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util');

function RetrieveInstallmentInfoRequest(request) {;

    BaseRequest.call(this, {
        locale: request['locale'],
        conversationId: request['conversationId'],
        binNumber: request['binNumber'],
        price: request['price']
    });
}

util.inherits(RetrieveInstallmentInfoRequest, BaseRequest);

module.exports = RetrieveInstallmentInfoRequest;