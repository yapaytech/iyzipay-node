'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util'),
    RefundModel = require('./model/Refund');

function CreateRefundRequest(request) {

    BaseRequest.call(this, RefundModel.body(request));
}

util.inherits(CreateRefundRequest, BaseRequest);

module.exports = CreateRefundRequest;