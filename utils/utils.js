var config         = require('../config/config');
var labels         = require('../config/labels');


module.exports = {
    successfulResponse: function(message, data) {
        var response = {
            message: message,
            code: 200,
            data: data
        };
        return response;
    },
    errorResponse: function(code, message, debug) {
        var response = {
            message: message,
            code: code,
			debug: debug
        };
        return response;
    },
    invalidTokenResponse: function() {
        var response = {
            message: labels.ERRA000,
            code: 401,
            debug: 'Invalid Token'
        };
        return response;
    },
    isValidID: function(id){
        if (id.match(/^[0-9a-fA-F]{24}$/))return true;
        return false;
    },
    getToken: function(headers){
        if(headers && headers.authorization){
            var parted = headers.authorization.split(' ');
            if(parted.length === 2){
                return parted[1];
            }else{
                return null;
            }
        }else{
            return null
        }
    }
};