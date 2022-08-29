var num1:string | null = prompt("Enter the First Number")
var num2:string | null = prompt("Enter the Second Number")
var number1: Number = Number (num1)
var number2: Number = Number (num2)
console.log("The value of Number 1 is:", number1)
console.log("The value of Number 2 is:", number2)

if (number1 > number2){
    console.log ("Number 1 is Greater than Number 2.")
}
else{
    console.log ("Number 2 is Greater than Number 1.")
}