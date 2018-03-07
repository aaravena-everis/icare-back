var response = require('../utils/utils');
var config         = require('../config/config');
var labels         = require('../config/labels');
var mongoose = require('mongoose');
var Author = mongoose.model('author');


exports.getAuthor = function(req, res) {
    try {
        if (!response.isValidID(req.params.id)){
            res.status(500).send(response.errorResponse(400,labels.ERRA005));
        }else{
            var query = Author.findById(req.params.id).exec();
            query.then(function(author){
                var r_author = {
                    name: author.name,
                    job: author.job,
                    image: author.image,
                    biography: author.biography,
                    linkedin: author.linkedin,
                    facebook: author.facebook,
                    twitter: author.twitter,
                    speechs: [{
                        name: "TBD"
                    }]
                };
                res.status(200).jsonp(response.successfulResponse(labels.SUCC000, r_author));
            }).catch(function(err){
                res.status(500).jsonp(response.errorResponse(500,labels.ERRA006, err.message));
            });
        }
    } catch (handler) {
        res.status(500).send(response.errorResponse(500,labels.ERRA006, handler.message));
    }
};