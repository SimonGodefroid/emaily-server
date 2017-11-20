const mongoose = require('mongoose');
const { Schema } = mongoose; // short for const Schema = mongoose.Schema;
const userSchema = new Schema({
	googleId: String
});
mongoose.model('users', userSchema);
