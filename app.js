'use strict'; //follow exactly

var userPoints = 0;

console.log('hello world');
alert('Welcome to my gussing game!');

var user = prompt('What is your name?');
alert('Hi ' + user + '!  I am so glad you want to play my game.');

var answer = prompt('is Nick\'s favorite food sushi?  Type yes or no.').toLowerCase();
console.log(answer);

if(answer === 'yes' || answer === 'Y'){
  userPoints++;
}else{
  alert('Wrong!');
}
alert('you have ' + userPoints + ' points.');
