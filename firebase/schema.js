class prof  {
    constructor(room) {
        this.room = room;
        this.markQuestion= function(questionID){
            /* 'post' req to db; set question.answered to true*/
            database.ref('rooms/'+room+'/questions/' + questionID).once('value').then(function(snapshot) {
                var question = {
                    id : snapshot.val().id,
                    likes : snapshot.val().likes,
                    goodQuestion : snapshot.val().goodQuestion,
                    answered : true
                }
                console.log(question);
                database.ref('rooms/'+room+'/questions/' + questionID).set(question);
              });
        }
        this.deleteRoom= function(){
            /*delete this' room from db*/
        }
    }
}

class student  {
    constructor(room) {
        this.room = room;
        this.upVoteQuestion= function(questionID){
                   /* 'post' req to db; set question.answered to true*/
                   database.ref('rooms/'+room+'/questions/' + questionID).once('value').then(function(snapshot) {
                    var question = {
                        id : snapshot.val().id,
                        likes : snapshot.val().likes+1,
                        goodQuestion : snapshot.val().goodQuestion,
                        answered : true
                    }
                    console.log(question);
                    database.ref('rooms/'+room+'/questions/' + questionID).set(question);
                  });;
        }
        this.postQuestion= function(question){
            /*posts the question to the room*/
            newQuestion = new question();
        }
    }
}

class question  {
    constructor(room) {
        var newPostKey = firebase.database().ref().child('/questions').push().key;
        this.id = newPostKey;
        this.likes = 0;
        this.goodQuestion = false;
        this.answered = false;
    }
}

class room  {
    constructor(room) {
        this.room = room;
    }
}
