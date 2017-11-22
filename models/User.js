const mongoose = require('mongoose');
const { Schema } = mongoose; // short for const Schema = mongoose.Schema;
const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 }
});
mongoose.model('users', userSchema);
