var input:any = prompt("Press Enter any Value");
console.log("The Input is:", input)
if (input>="a" && input<="z" || input>="A" && input<="Z"){
    console.log ("This Value is an Alphabet.")
}
else if (input>= -999999999 && input<=+999999999) {
    console.log ("This Value is a Number.")
}
else {
    console.log ("This Value is a Special Character. ")
}