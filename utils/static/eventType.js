var lost = function(){
    return {_id : 1, name : 'Mascota Perdida'};
};

var found = function(){
    return {_id : 2, name : 'Mascota Encontrada'};
};

var lover = function(){
    return {_id : 3, name : 'Busco Pareja'};
};

var adoption = function(){
    return {_id : 4, name : 'Adopción'};
};

var update =  function(_id){
    var res;
    switch (_id) {
        case 1:
            res  = {
                _id : lost()._id,
                name: lost().name
            };
            return res;
        case 2:
            res  = {
                _id : found()._id,
                name: found().name
            };
            return res;
        case 3:
            res  = {
                _id : lover()._id,
                name: lover().name
            };
            return res;
        case 4:
            res  = {
                _id : adoption()._id,
                name: adoption().name
            };
            return res;
    }
};

module.exports = {
    lost:lost,
    found:found,
    lover:lover,
    adoption:adoption,
    update:update
};