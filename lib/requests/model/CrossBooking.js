function CrossBooking() {}

CrossBooking.body = function(data) {

    return typeof data !== 'undefined'? {
        locale: data["locale"],
        conversationId: data["conversationId"],
        subMerchantKey: data["subMerchantKey"],
        price: data["price"],
        reason: data["reason"]
    }: undefined
};

module.exports = CrossBooking;