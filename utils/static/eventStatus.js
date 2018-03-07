var opened = function() {
    return {_id : 1, name : 'Abierto'};
};

var closed = function() {
    return {_id : 2, name : 'Cerrado'};
};

var canceled = function() {
    return {_id : 3, name : 'Cancelado'};
};

var expired = function() {
    return {_id : 2, name : 'Expirado'};
};

var update =  function(_id){
    var res;
    switch (_id) {
        case 1:
            res  = {
                _id : opened()._id,
                name: opened().name
            };
            return res;
        case 2:
            res  = {
                _id : closed()._id,
                name: closed().name
            };
            return res;
        case 3:
            res  = {
                _id : canceled()._id,
                name: canceled().name
            };
            return res;
        case 4:
            res  = {
                _id : expired()._id,
                name: expired().name
            };
            return res;
    }
}

module.exports = {
    opened:opened,
    closed:closed,
    canceled:canceled,
    expired:expired,
    update:update
};