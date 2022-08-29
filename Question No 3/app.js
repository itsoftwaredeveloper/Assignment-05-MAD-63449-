var input = prompt("Please Enter the Number");
var num = Number(input);
console.log("Number", num);
if (num == 0) {
    console.log("The Number is Equal to Zero.");
}
else if (num > 0) {
    console.log("The Number is Positive.");
}
else if (num < 0) {
    console.log("The Number is Negative.");
}
else {
    console.log("The Number is not found.");
}
