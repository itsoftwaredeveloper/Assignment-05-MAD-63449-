var input:string | null = prompt("Please Enter the Number");
var num: number = Number(input)
console.log("Number", num)

if (num %2==0){
    console.log ("The Number is Even.")
}
else if (num %2!==0) {
    console.log ("The Number is Odd.")
}
else {
    console.log("The Number is not found.")
}