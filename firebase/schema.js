class Prof {
	constructor(room) {
		this.room = room;
		this.markQuestion = function(questionID) {
			/* 'post' req to db; set question.answered to true*/
			database.ref('rooms/' + room + '/questions/' + questionID).once('value').then(function(snapshot) {
				var question = {
					id: snapshot.val().id,
					likes: snapshot.val().likes,
					goodQuestion: snapshot.val().goodQuestion,
					answered: true
				};
				console.log(question);
				database.ref('rooms/' + room + '/questions/' + questionID).set(question);
			});
		};
		this.deleteRoom = function() {
			/*delete this' room from db*/
		};
	}
}

class Student {
	constructor(room) {
		this.room = room;
		this.upVoteQuestion = function(questionID) {
			/* 'post' req to db; set question answered to true*/
			questionID.likes++;
		};
		this.postQuestion = function(question) {
			/*posts the question to the room*/
		};
	}
}

class Question {
	constructor(room) {
		this.id = id;
		this.likes = 0;
		this.goodQuestion = false;
		this.answered = false;
	}
}

class Room {
	constructor(room) {
		this.room = room;
		this.markQuestion = function(questionID) {
			/* 'post' req to db; set question.answered to true*/
		};
		this.deleteRoom = function() {
			/*delete this' room from db*/
		};
	}
}

// export { Room, Question, Student, Prof };
module.exports = {
	Room: Room,
	Question: Question,
	Student: Student,
	Prof: Prof
};
