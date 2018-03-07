var xs = function(){
    return {_id : 1, name : 'XS'};
};

var s = function(){
    return {_id : 2, name : 'S'};
};

var m = function(){
    return {_id : 3, name : 'M'};
};

var l = function(){
    return {_id : 4, name : 'L'};
};

var xl = function(){
    return {_id : 5, name : 'XL'};
};

var update =  function(_id){
    var res;
    switch (_id) {
        case 1:
            res  = {
                _id : xs()._id,
                name: xs().name
            };
            return res;
        case 2:
            res  = {
                _id : s()._id,
                name: s().name
            };
            return res;
        case 3:
            res  = {
                _id : m()._id,
                name: m().name
            };
            return res;
        case 4:
            res  = {
                _id : l()._id,
                name: l().name
            };
            return res;
        case 5:
            res  = {
                _id : xl()._id,
                name: xl().name
            };
            return res;
    }
};

module.exports = {
    xs:xs,
    s:s,
    m:m,
    l:l,
    xl:xl,
    update:update
};