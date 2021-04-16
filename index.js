var readLineSync = require("readline-sync");
var Score= 0;

//Welcoming the user/player.
var userName = readLineSync.question("Hey there! What's your name? \n");
console.log("Greetings "+userName+"!"+"\nWelcome to 'How well do you know Nikhil Kaul'\n");


//questions - object creation
var questionOne = {
  question: "1)How old is Nikhil?\n a)22 \n b)23 \n c)24 \n d)25 \n",
  answer: "b"
}

var questionTwo = {
  question: "2)Where does Nikhil currently reside?\n a)Bangalore \n b)Chennai \n c)Hyderabad \n d)Mumbai \n",
  answer: "a"
}

var questionThree = {
  question: "3)Where does Nikhil currently work?\n a)Microsoft \n b)Dell \n c)Accenture \n d)Amazon \n",
  answer: "d"
}

var questionFour = {
  question: "4)Is Nikhil married?\n a)Yes \n b)No \n ",
  answer: "b"
}

var questionFive = {
  question: "5)Nikhil has graduated from which college(2020)?\n a)Christ University \n b)St. Joseph's College(Autonomous) \n c)Jain University \n d)Not graduated \n",
  answer: "b"
}

var questionSix = {
  question: "6)Nikhil has done television advertisement for which brand?\n a)Amazon \n b)Samsung \n c)Nokia \n d)Kinley \n",
  answer: "b"
}

var questionSeven = {
  question: "7)Is Nikhil a freelancer? If yes, what does he do ?\n a)Yes, Website development \n b)Yes, Android Development \n c)Yes, IOS development \n d)No \n",
  answer: "a"
}

// array creation
var questions =[questionOne, questionTwo, questionThree, questionFour,questionFive,questionSix,questionSeven];

// array length
var arrayLength = questions.length;

//function to ask the user questions
function play(question, answer){
  var ans= readLineSync.question(question);
  var modAns = ans.toLowerCase();
  if(modAns === answer){
    console.log("Correct!\n");
    Score++;
  }else{
    console.log("Wrong!\nCorrect answer is "+"'"+answer+"'");
  }
}

for(var i=0; i<arrayLength; i++){

  var currentQuestion = questions[i].question;
  var currentAnswer = questions[i].answer;
  play(currentQuestion, currentAnswer);
}


//Score overview
console.log(userName+" your current score is "+Score+" out of 7")
if(Score===7){
  console.log("You are an Amazing friend!")
}else{
  console.log("Not bad, you are a good friend!")
}

