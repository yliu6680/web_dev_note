var secretNumber = 4;
var guess = Number(prompt("guess a number:"));
if (guess === secretNumber) {
	alert("Your're right!");
}
else if (guess > secretNumber) {
	alert("Your guess number is bigger!");
} else {
	alert("Your guess number is smaller!");
}