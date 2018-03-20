var response = require('../utils/utils');
var config         = require('../config/config');
var labels         = require('../config/labels');
var mongoose = require('mongoose');
var Author = mongoose.model('author');
var Event = mongoose.model('event');


exports.getAuthor = function(req, res) {
    try {
        if (!response.isValidID(req.params.id)){
            res.status(500).send(response.errorResponse(400,labels.ERRA005));
        }else{
            var query = Author.findById(req.params.id).exec();
            query.then(function(author){
                if(author){
                    var r_author = {
                        name: author.name,
                        job: author.job,
                        image: author.image,
                        biography: author.biography,
                        linkedin: author.linkedin,
                        facebook: author.facebook,
                        twitter: author.twitter,
                        speechs: []
                    };
                    var query2 = Event.find({'sessions.speechs.idAuthor': req.params.id}).exec();
                    query2.then(function(events){
                        events.forEach(function(event){
                            event.sessions.forEach(function(session){
                                session.speechs.forEach(function(speech){
                                    if(speech.idAuthor.toString() == req.params.id){
                                        var r_speech = {
                                            eventTitle: event.title,
                                            eventDate: event.date,
                                            sessionName: session.name,
                                            sessionStartHour: session.startHour,
                                            sessionFinishHour: session.finishHour,
                                            title: speech.title,
                                            description: speech.description
                                        };
                                        r_author.speechs.push(r_speech);
                                    };
                                });
                            });
                        });
                        res.status(200).jsonp(response.successfulResponse(labels.SUCC000, r_author));
                    }).catch(function(err){
                        res.status(500).jsonp(response.errorResponse(500,labels.ERRA006, err.message));
                    });
                }else{
                    res.status(400).jsonp(response.errorResponse(400,labels.ERRA008));
                }
            }).catch(function(err){
                res.status(500).jsonp(response.errorResponse(500,labels.ERRA006, err.message));
            });
        }
    } catch (handler) {
        res.status(500).send(response.errorResponse(500,labels.ERRA006, handler.message));
    }
};