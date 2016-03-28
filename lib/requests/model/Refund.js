'use strict';

var utils = require('../../utils');

function Refund() {
}

Refund.body = function (data) {

    return typeof data !== 'undefined' ? {
        paymentTransactionId: data["paymentTransactionId"],
        price: utils.formatPrice(data["price"]),
        ip: data["ip"]
    } : undefined
};

module.exports = Refund;