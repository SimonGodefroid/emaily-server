const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);
	app.get('/auth/google/callback', passport.authenticate('google'), (req, res) => {
		res.redirect('/surveys');
	});
	app.get('/api/logout', (req, res) => {
		req.logout();
		res.redirect('/');
		// res.send(req.user); // explained
	});

	app.get('/api/current_user', (req, res) => {
		// res.send(req.session); => { passport:{ user:'5a12edcd7a6343684e85e04b'}}// explained
		res.send(req.user);
	});
};
