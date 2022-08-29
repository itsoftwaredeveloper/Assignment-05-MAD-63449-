var input:string | null = prompt("Please Enter the Number");
var num: number = Number(input)
console.log("Number", num)

if (num%5==0 && num%11==0){
    console.log ("The Number is divisble by 5 and 11.")
}
else if (num%5==0) {
    console.log ("The Number is divisible by 5.")
}
else if (num%11==0) {
    console.log("The Number is divisible by 11.")
}
else {
    console.log("The Number is not found.")
}