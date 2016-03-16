'use strict';

function PostPayment() {}

PostPayment.body = function(data) {

    return typeof data !== 'undefined'? {
        locale: data['locale'],
        conversationId: data['conversationId'],
        paymentId: data['paymentId'],
        ip: data['ip']
    }: undefined
};

module.exports = PostPayment;