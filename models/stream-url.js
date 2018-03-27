var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var streamSchema = new Schema({
	urlStream: { type : String, required: true},
	active: { type : Boolean, required: true}
});

module.exports = mongoose.model('stream-url', streamSchema);