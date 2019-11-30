const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('pages/home');
});

// students flow
app.get('/student/join-room', (req, res) => {
	res.render('pages/joinRoom');
});

app.get('/student/room/:room_id', (req, res) => {
	// res.render('pages/endRoomStudent');
	res.send('pages/endRoomStudent');
});

app.get('/student/room/end', (req, res) => {
	// res.render('pages/endRoomStudent');
	res.send('pages/endRoomStudent');
});

// prof flow
app.get('/prof/create-room', (req, res) => {
	res.render('pages/createRoom');
});

app.get('/prof/room/:room_id', (req, res) => {
	// res.render('pages/endRoomProf');
	res.send('roomID: fafsf');
});

app.get('/prof/room/end', (req, res) => {
	// res.render('pages/endRoomProf');
	res.send('pages/endRoomProf');
});

app.listen(7777, () => {
	console.log('Server running on 7777...');
});
