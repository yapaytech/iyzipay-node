'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util'),
    CrossBooking = require('./model/CrossBooking');

function CreateCrossBookingRequest(request) {

    BaseRequest.call(this, CrossBooking.body(request));
}

util.inherits(CreateCrossBookingRequest, BaseRequest);

module.exports = CreateCrossBookingRequest;