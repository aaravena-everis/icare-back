var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    name: { type : String, required: true },
	lastName: { type : String, required: true },
	password : { type : String, required: true},
	email: { type : String, required: true},
    events: [{
        type : Schema.ObjectId, ref: 'event', required: true
    }],

    linkedIn: {type : String},
	
	pushNotification: { type : Boolean, default : true, required : true },
	mobile_xid: { type : String},
	mobile_so: { type : String},
	
	createdDate : { type: Date, default: Date.now },
	modifiedData : { type: Date, default: Date.now },
	isEnabled : { type : Boolean, default : true, required : true }
	

});
module.exports = mongoose.model('user', userSchema);