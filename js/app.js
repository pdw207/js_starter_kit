alert('Welcome to the coolest game ever');

var randomNumber = Math.round(Math.random()*100);


// alert("The random number is " + randomNumber);

var name = prompt('Hey, give me a name.');
var number = prompt('Please enter a number!');

while (Number(number) !== randomNumber){
  number = prompt("Try Again!!! Enter anther number");
}
alert('You won!');
