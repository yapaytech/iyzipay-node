'use strict';

var BaseRequest = require('./BaseRequest'),
    util = require('util'),
    Buyer = require('./model/Buyer'),
    Address = require('./model/Address'),
    BasketItem = require('./model/BasketItem');

function CreateCheckoutFormInitializeRequest(request) {

    BaseRequest.call(this, {
        locale: request['locale'],
        conversationId: request['conversationId'],
        price: request['price'],
        basketId: request['price'],
        paymentGroup: request['price'],
        buyer: Buyer.body(request["buyer"]),
        shippingAddress: Address.body(request["shippingAddress"]),
        billingAddress: Address.body(request["billingAddress"]),
        basketItems: request["basketItems"].map(function(basketItem) {
            return BasketItem.body(basketItem);
        }),
        callbackUrl: request["callbackUrl"],
        paymentSource: request["paymentSource"],
        posOrderId: request["posOrderId"],
        paidPrice: request["paidPrice"],
        forceThreeDS: request["forceThreeDS"],
        cardUserKey: request["cardUserKey"]
    });
}

util.inherits(CreateCheckoutFormInitializeRequest, BaseRequest);

module.exports = CreateCheckoutFormInitializeRequest;