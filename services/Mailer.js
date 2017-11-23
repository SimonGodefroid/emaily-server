const sendgrid = require('sendgrid');
const helper = sendgrid.mail;
const keys = require('../config/keys');

// helper.Mail takes options and spits out an object
class Mailer extends helper.Mail {}

module.exports = Mailer;
