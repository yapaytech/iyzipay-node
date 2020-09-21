"use strict";

var BaseRequest = require("./BaseRequest"),
  util = require("util");

function GetTransactionRequest(request) {
  BaseRequest.call(this, {
    paymentConversationId: request["conversationId"],
  });
}

util.inherits(GetTransactionRequest, BaseRequest);

module.exports = GetTransactionRequest;
