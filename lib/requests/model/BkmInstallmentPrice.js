'use strict';

var utils = require('../../utils');

function BkmInstallmentPrice() {
}

BkmInstallmentPrice.body = function (data) {

    return typeof data !== 'undefined' ? {
        installmentNumber: data["installmentNumber"],
        totalPrice: utils.asPrice(data["totalPrice"])
    } : undefined
};

module.exports = BkmInstallmentPrice;