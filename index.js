const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });

const app = express();

// express middlewares
// they do pre-process operations
app.use(bodyParser.json());
app.use(
	// sets the life expentancy of cookies
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000, // 30days
		keys: [keys.cookieKey]
	})
);
// tells passport to initialize for config
app.use(passport.initialize());
// tells passport to use session
app.use(passport.session());

require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
