const express = require('express');
const app = express();

// route handler for get on the '/' route
app.get('/', (req, res) => {
	res.send({ hi: 'there' });
});

const PORT = process.env.PORT || 5000;
// node has to listen to requests made on port 5000
app.listen(PORT);
