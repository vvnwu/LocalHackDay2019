// import { Prof, Student, Problem, Room } from './firebase/schema';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const firebase = require('firebase');
const schema = require('./firebase/schema');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

firebase.initializeApp({
	apiKey: 'AIzaSyDUvh1FX-fc5dXoTNZ_yH_A8Vi-as3PtDU',
	authDomain: 'localhackday-2019.firebaseapp.com',
	databaseURL: 'https://localhackday-2019.firebaseio.com',
	projectId: 'localhackday-2019',
	storageBucket: 'localhackday-2019.appspot.com',
	messagingSenderId: '928257373340',
	appId: '1:928257373340:web:f007da14e0cd18d3f26959'
});
const database = firebase.database();

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
	res.render('pages/home');
});

// students flow
app.get('/student/join-room', (req, res) => {
	res.render('pages/joinRoom');
});

app.post('/student/join-room', (req, res) => {
	// send to firebase and redirect to /student/room/:room_id
	// const data = req.body.data;
	// let prof = new schema.Prof(0);
	// prof.markQuestion(0);
});

app.get('/student/room/:room_id', (req, res) => {
	res.render('pages/roomStudent');
});

app.get('/student/room/end', (req, res) => {
	res.render('pages/endRoomStudent');
});

// prof flow
app.get('/prof/create-room', (req, res) => {
	res.render('pages/createRoom');
});

app.post('/prof/create-room', (req, res) => {
	// send to firebase and redirect to /prof/room/:room_id
	// const room = new schema.Room();

	let roomNumber = req.body.roomNumber;
	let room = {
		id: roomNumber
	};
	database.ref('rooms/' + room).once('value').then(function(snapshot) {
		database.ref('rooms/' + room).set(room);
	});
	prof.markQuestion(0);
});

app.get('/prof/room/:room_id', (req, res) => {
	res.render('pages/roomProf');
});

app.get('/prof/room/end', (req, res) => {
	// res.render('pages/endRoomProf');
	res.send('pages/endRoomProf');
});

app.listen(7777, () => {
	console.log('Server running on 7777...');
});

module.exports = { database: database };
