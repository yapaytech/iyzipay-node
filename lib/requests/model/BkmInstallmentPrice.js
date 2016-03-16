'use strict';

function BkmInstallmentPrice() {}

BkmInstallmentPrice.body = function(data) {

    return typeof data !== 'undefined'? {
        installmentNumber: data["installmentNumber"],
        totalPrice: data["totalPrice"]
    }: undefined
};

module.exports = BkmInstallmentPrice;