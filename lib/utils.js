'use strict';

var crypto = require('crypto');

var utils = module.exports = {
    generateAuthorizationHeader: function (iyziWsHeaderName, apiKey, separator, secretKey, body, randomString) {
        return iyziWsHeaderName + ' ' + apiKey + separator + utils.generateHash(apiKey, randomString, secretKey, body);
    },
    generateHash: function (apiKey, randomString, secretKey, body) {
        var shaSum = crypto.createHash('sha1');
        shaSum.update(apiKey + randomString + secretKey + body);
        return shaSum.digest('base64');
    },
    generateRequestString: function (request) {
        var isArray = Array.isArray(request);
        var requestString = '[';
        for (var i in request) {
            var val = request[i];
            // Eliminate number keys of array elements
            if (!isArray) {
                requestString += i + '=';
            }
            if (typeof val === 'object') {
                requestString += utils.generateRequestString(val);
            } else {
                requestString += val;
            }
            requestString += isArray ? ', ' : ',';
        }
        requestString = requestString.slice(0, (isArray ? -2 : -1));
        requestString += ']';
        return requestString;
    },
    generateRandomString: function (size) {
        return process.hrtime()[0] + Math.random().toString(size).slice(2);
    },
    apiMethod: {
        RETRIEVE: 'retrieve',
        CREATE: 'create',
        DELETE: 'delete',
        UPDATE: 'update'
    }
};