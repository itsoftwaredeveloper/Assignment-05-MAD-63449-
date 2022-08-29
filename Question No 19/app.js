var input = prompt("Enter the Physics Marks out of 100");
console.log("Obtained Marks in Physics:", input);
var input = prompt("Enter the Chemistry Marks out of 100");
console.log("Obtained Marks in Chemistry:", input);
var input = prompt("Enter the Math Marks out of 100");
console.log("Obtained Marks in Math:", input);
var input = prompt("Enter the Biology Marks out of 100");
console.log("Obtained Marks in Biology:", input);
var input = prompt("Enter the Computer Marks out of 100");
console.log("Obtained Marks in Computer:", input);
var TotalSum = Number(input);
var average = Number(TotalSum / 5) * 100;
var percentage = Number(average / 500) * 100;
if (percentage >= 90) {
    console.log("A+ Grade");
}
else if (percentage >= 80) {
    console.log("A Grade");
}
else if (percentage >= 70) {
    console.log("B Grade");
}
else if (percentage >= 60) {
    console.log("C Grade");
}
else if (percentage >= 50) {
    console.log("D Grade");
}
else
    (percentage <= 40);
{
    console.log("You are Fail");
}
