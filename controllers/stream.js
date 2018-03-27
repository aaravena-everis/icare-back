var response = require('../utils/utils');
var config         = require('../config/config');
var labels         = require('../config/labels');
var mongoose = require('mongoose');
var StreamBD = mongoose.model('stream');

exports.getStreamUrl = function(req, res) {
    var query = StreamBD.find({}).exec();
    var r_stream_list= [];
    query.then(function(streamUrls){
        streamUrls.forEach(function(streamUrl){
            var r_stream = {
                urlStream: streamUrl.urlStream,
                active: streamUrl.active,
            };
            r_stream_list.push(r_event);
        });
        res.status(200).jsonp(response.successfulResponse(labels.SUCC000, r_stream_list));
    }).catch(function(err){
        res.status(500).jsonp(response.errorResponse(500,labels.ERRA006, err.message));
    });
};