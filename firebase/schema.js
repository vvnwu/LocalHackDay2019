class prof  {
    constructor(room) {
        this.room = room;
        this.markQuestion= function(questionID){
            /* 'post' req to db; set question.answered to true*/
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
            /* 'post' req to db; set question answered to true*/
            questionID.likes++;
        }
        this.postQuestion= function(question){
            /*posts the question to the room*/
        }
    }
}

class question  {
    constructor(room) {
        this.id = id;
        this.likes = 0;
        this.goodQuestion = false;
        this.answered = false;
        this.
    }
}

class prof  {
    constructor(room) {
        this.room = room;
        this.markQuestion= function(questionID){
            /* 'post' req to db; set question.answered to true*/
        }
        this.deleteRoom= function(){
            /*delete this' room from db*/
        }
    }
}
