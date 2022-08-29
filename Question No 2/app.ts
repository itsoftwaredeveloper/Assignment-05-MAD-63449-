var num1:string | null = prompt("Please Enter the First Number")
var num2:string | null = prompt("Please Enter the Second Number")
var num3:string | null = prompt("Please Enter the Third Number")
var number1: Number = Number (num1)
var number2: Number = Number (num2)
var number3: Number = Number (num3)
console.log("The value of Number 1 is:", number1)
console.log("The value of Number 2 is:", number2)
console.log("The value of Number 3 is:", number3)

if (number1 > number2 || number1 > number3){
    console.log ("The Number 1 is Greater. ")
}
else if (number2 > number1 || number2 > number3) {
    console.log ("The Number 2 is Greater.")
}
else if (number3 > number1 || number3 > number2) {
    console.log("The Number 3 is Greater.")
}
else {
    console.log("All the Numbers are Equal.")
}