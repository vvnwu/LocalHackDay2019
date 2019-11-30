const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('index');
});

app.get('/student', (req, res) => {
	res.send('Student flow');
});

app.get('/prof', (req, res) => {
	res.send('Prof flow');
});

app.listen(7777, () => {
	console.log('Server running on 7777...');
});
