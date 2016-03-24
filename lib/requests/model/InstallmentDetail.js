'use strict';

var InstallmentPrice = require('./InstallmentPrice');

function InstallmentDetail() {
}

InstallmentDetail.body = function (data) {

    return typeof data !== 'undefined' ? {
        binNumber: data["binNumber"],
        price: data["price"],
        cardType: data["cardType"],
        cardAssociation: data["cardAssociation"],
        cardFamilyName: data["cardFamilyName"],
        force3ds: data["force3ds"],
        bankCode: data["bankCode"],
        bankName: data["bankName"],
        installmentPrices: data["installmentPrices"].map(function (installmentPrice) {
            return InstallmentPrice.body(installmentPrice);
        })
    } : undefined
};

module.exports = InstallmentDetail;