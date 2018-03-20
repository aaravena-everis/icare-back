var response = require('../utils/utils');
var config         = require('../config/config');
var labels         = require('../config/labels');
var mongoose = require('mongoose');
var Event = mongoose.model('event');


exports.getAllEvents = function(req, res) {
    var query = Event.find({}).exec();
    var r_event_list= [];
    query.then(function(events){
        events.forEach(function(event){
            var r_event = {
                title: event.title,
                subtitle: event.subtitle,
                date: event.date,
                location: event.location.name,
                image: event.image,
                featured: event.featured,
                id: event._id
            };
            r_event_list.push(r_event);
        });
        res.status(200).jsonp(response.successfulResponse(labels.SUCC000, r_event_list));
    }).catch(function(err){
        res.status(500).jsonp(response.errorResponse(500,labels.ERRA006, err.message));
    });
};

exports.getEventDetail = function(req, res) {
    try {
        if (!response.isValidID(req.params.id)){
            res.status(500).send(response.errorResponse(400,labels.ERRA005));
        }else{
            var query = Event.findById(req.params.id).exec();
            query.then(function(event){
                if(event){
                    res.status(200).jsonp(response.successfulResponse(labels.SUCC000, event));
                }else{
                    res.status(400).jsonp(response.errorResponse(400,labels.ERRA003))
                }
            }).catch(function(err){
                res.status(500).jsonp(response.errorResponse(500,labels.ERRA006, err.message));
            });
        }
    } catch (handler) {
        res.status(500).send(response.errorResponse(500,labels.ERRA006, handler.message));
    }
};

exports.addCommentToSessionOfEvent = function(req, res) {
    try {
        if ((!response.isValidID(req.body.idEvent)) && (!response.isValidID(req.body.idSession)) && (!response.isValidID(req.body.idUser))){
            res.status(500).send(response.errorResponse(400,labels.ERRA005));
        } else {
            var query = Event.findById(req.body.idEvent).exec();
            var query_res;
            var prueba = [];
            query.then(function(event){
                if(event) {
                    event.forEach(function(session) {
                        prueba.push(session);
                        /*if(session._id.toString() == req.body.idSession) {
                            var comment = {
                                idUser : req.body.idUser,
                                text : req.body.comment
                            };
                            event.session.comments.push(comment);
                            //query_res = Event.save(event);
                            query_res.then(function(respuesta){
                                if(respuesta){
                                    res.status(200).jsonp(response.successfulResponse(labels.SUCC000, 'Agregado Correctamente'));
                                }else{
                                    res.status(400).jsonp(response.errorResponse(400,labels.ERRA003))
                                }
                            }).catch(function(err){
                                res.status(500).jsonp(response.errorResponse(500,labels.ERRA006, err.message));
                            });
                        }*/
                    });
                    res.status(200).jsonp(response.successfulResponse(labels.SUCC000, prueba));
                } else {
                    res.status(400).jsonp(response.errorResponse(500,labels.ERRA006, err.message));
                }
            });
        }
    } catch (handler) {
        res.status(500).send(response.errorResponse(500,labels.ERRA006, handler.message));
    }
};