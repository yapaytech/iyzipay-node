'use strict';

var PaymentCard = require('./PaymentCard'),
    Buyer = require('./Buyer'),
    Address = require('./Address'),
    BasketItem = require('./BasketItem'),
    utils = require('../../utils');

function Payment() {
}

Payment.body = function (data) {

    return typeof data !== 'undefined' ? {
        locale: data['locale'],
        conversationId: data['conversationId'],
        price: utils.asPrice(data['price']),
        paidPrice: utils.asPrice(data['paidPrice']),
        installment: data['installment'],
        paymentChannel: data['paymentChannel'],
        basketId: data['basketId'],
        paymentGroup: data['paymentGroup'],
        paymentSource: data['paymentSource'],
        paymentCard: PaymentCard.body(data['paymentCard']),
        buyer: Buyer.body(data['buyer']),
        shippingAddress: Address.body(data['shippingAddress']),
        billingAddress: Address.body(data['billingAddress']),
        basketItems: data['basketItems'].map(function (basketItem) {
            return BasketItem.body(basketItem);
        })
    } : undefined
};

module.exports = Payment;