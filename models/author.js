var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var authorSchema = new Schema({
    name : { type : String, required: true },
    job : { type : String, required: true },
    image : { type : String },
    biography : { type : String },
    linkedin : { type : String },
    facebook : { type : String },
    twitter : { type : String }
});

module.exports = mongoose.model('author', authorSchema);