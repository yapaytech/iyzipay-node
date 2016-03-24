'use strict';

function InstallmentPrice() {
}

InstallmentPrice.body = function (data) {

    return typeof data !== 'undefined' ? {
        installmentPrice: data["installmentPrice"],
        totalPrice: data["totalPrice"],
        installmentNumber: data["installmentNumber"]
    } : undefined
};

module.exports = InstallmentPrice;