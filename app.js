'use strict'; //follow exactly

//Custom stylized alert window
//please ignore this function section for assignment.
function CustomAlert(){
  this.render = function(dialog){
    var winW = window.innerWidth;
    var winH = window.innerHeight;
    var dialogoverlay = document.getElementById('dialogoverlay');
    var dialogbox = document.getElementById('dialogbox');
    dialogoverlay.style.display = "block";
    dialogoverlay.style.height = winH+"px";
    dialogbox.style.left = (winW/2) - (550 * .5)+"px";
    dialogbox.style.top = "100px";
    dialogbox.style.display = "block";
    document.getElementById('dialogboxhead').innerHTML = "Your results";
    document.getElementById('dialogboxbody').innerHTML = dialog;
    document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Alert.ok()">OK</button>';
  }
  this.ok = function(){
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById('dialogoverlay').style.display = "none";
  }
}

//Notice Caps!
var Alert = new CustomAlert();

//Assignment essentials
//Point counter
var userPoints = 0;
//Greeting
console.log('Answers');
alert('Welcome to my gussing game!');
//Name Inquirery
var user = prompt('What is your name?');
alert('Hi ' + user + '!  I am so glad you want to play my game.');

//Question 1
var answer1 = prompt('Is Nick\'s favorite food sushi?  Type yes or no.').toLowerCase();//makes answers all lowercase
console.log('First answer, ' + answer1);
//user answer input
if(answer1 === 'yes' || answer1 === 'y'){
  userPoints++;
}else{
  alert('Wrong, the only thing that can compare is a good medium rare steak!');
}
//Points update
alert('you have ' + userPoints + ' points.');

//Question 2
var answer2 = prompt('Is Nick\'s favorite TV show Jersy Shore?  Type yes or no.').toLowerCase();//makes answers all lowercase
console.log('Second answer, ' + answer2);
//user answer input
if(answer2 === 'no' || answer2 === 'n'){
  userPoints++;
}else{
  alert('NOPE!, I don\'t understand how that is anyones favorite show.');
}
//Points update
alert('you have ' + userPoints + ' points.');

//Question 3
var answer3 = prompt('Does Nick like working with his hands?  Type yes or no.').toLowerCase();//makes answers all lowercase
console.log('Third answer, ' + answer3);
//user answer input
if(answer3 === 'yes' || answer3 === 'y'){
  userPoints++;
}else{
  alert('Yes he does, he has a workshop he spends most of his time awake in.');
}
//Points update
alert('you have ' + userPoints + ' points.');

//Question 4
var answer4 = prompt('Does Nick spend to much time in front of the computer?  Type yes or no.').toLowerCase();//makes answers all lowercase
console.log('Fourth answer, ' + answer4);
//user answer input
if(answer4 === 'yes' || answer4 === 'y'){
  userPoints++;
}else{
  alert('It is a matter of opinion really but he does.');
}
//Points update
alert('you have ' + userPoints + ' points.');

//Question 5
var answer5 = prompt('Does Nick play to many video games?  Type yes or no.').toLowerCase();//makes answers all lowercase
console.log('Fifth answer, ' + answer5);
//user answer input
if(answer5 === 'no' || answer5 === 'n'){
  userPoints++;
}else{
  alert('No, he rarely has time to play games anymore. It\'s very sad.');
}
//Points update
alert('you now have ' + userPoints + ' points.');
