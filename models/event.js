var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eventSchema = new Schema({
    title : { type : String, required: true  },
    subtitle : { type : String },
    date : { type : Date },
    image : { type : String },
    featured : { type : Boolean},
    description : { type : String },
    manifest : { type : String },
    location : {
        coordinates: {	type: [Number] },
        name : { type : String },
        streetName: { type : String },
        streetNumber: { type : String },
        district: { type : String },
        region: { type : String },
        country: { type : String }
    },
    ticket:[{
        type: { type : String },
        memberCost: { type : String },
        generalCost: { type : String },
    }],
    sessions:[{
        number: { type : String },
        name: { type : String },
        description: { type : String },
        startHour: { type : String },
        finishHour: { type : String },
        speechs:[{
            idAuthor : { type : Schema.ObjectId, ref: 'author', required: true },
            title: { type : String },
            author: { type : String },
            job: { type : String },
            image: { type : String },
            description: { type : String }
        }]
    }]
});

module.exports = mongoose.model('event', eventSchema);