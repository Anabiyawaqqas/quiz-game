var canva;
var gameState=0
var allcontestants
var contestantCount
var answer
var database
var question , contestant,quiz

function setup(){
  canvas = createCanvas(850,400);
  database=firebase.database()
  quiz=newquiz()
  quiz.getState()
  quiz.start()
}


function draw(){
  background("black");

  if(contestantCount===4){
    quiz.update(1)
  }
  if(gameState===1){
    clear()
    quiz.play()
  }
}
