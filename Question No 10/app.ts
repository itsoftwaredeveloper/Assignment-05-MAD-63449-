var char : string | null = prompt("Press Enter an Alphabet");
var Input : string = String (char)
console.log("The Input Value is:", char)
if (Input >="A" && Input <="Z") {
    console.log ("The Alphabet is in Uppercase.")
}
else if (Input >="a" && Input <="z") {
    console.log ("The Alphabet is Lowercase.")
}
else
{
    console.log ("This character is not Alphabet.")
}