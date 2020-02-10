'use strict';

var IyzipayResource = require('../IyzipayResource');

function SubscriptionCard() {
    this._config = arguments[0];
    this._api = {
        update: {
            path: '/v2/subscription/card-update/checkoutform/initialize',
            method: 'POST',
            requestModel: 'UpdateSubscriptionCardRequest'
        },
        updateWithSubscriptionReferenceCode: {
            path: '/v2/subscription/card-update/checkoutform/initialize/with-subscription',
            method: 'POST',
            requestModel: 'UpdateSubscriptionCardWithSubscriptionReferenceCodeRequest'
        },
    };
}

SubscriptionCard.prototype = new IyzipayResource();

module.exports = SubscriptionCard;
