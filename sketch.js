var canvas;

var contestantCount,database, quiz, question ,contestant ; 
var gameState = 0;

function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);

  quiz = new Quiz();
 contestant=new Contestant();
 question=new Question();

getState();
start();
}


function draw(){
  background("pink");

  
}
