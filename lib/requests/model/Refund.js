function Refund() {
}

Refund.body = function (data) {

    return typeof data !== 'undefined' ? {
        paymentTransactionId: data["paymentTransactionId"],
        price: data["price"],
        ip: data["ip"]
    } : undefined
};

module.exports = Refund;