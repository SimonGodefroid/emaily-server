const mongoose = require('mongoose');
const { Schema } = mongoose; // short for const Schema = mongoose.Schema;
const RecipientSchema = require('./Recipient');
const surveySchema = new Schema({
	title: String, // title of the campaign
	subject: String,
	body: String,
	recipients: [RecipientSchema],
	yes: { type: Number, default: 0 },
	no: { type: Number, default: 0 },
	_user: { type: Schema.Types.ObjectId, ref: 'User' }, // reference field
	dateSent: Date,
	lastResponded: Date
});
mongoose.model('surveys', surveySchema);
