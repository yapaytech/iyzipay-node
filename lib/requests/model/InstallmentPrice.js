'use strict';

var utils = require('../../utils');

function InstallmentPrice() {
}

InstallmentPrice.body = function (data) {

    return typeof data !== 'undefined' ? {
        installmentPrice: utils.asPrice(data["installmentPrice"]),
        totalPrice: utils.asPrice(data["totalPrice"]),
        installmentNumber: data["installmentNumber"]
    } : undefined
};

module.exports = InstallmentPrice;