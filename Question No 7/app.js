var input = prompt("Please Enter the Alphabet");
var char = String(input);
if (char >= 'a' && char <= 'z' || char >= 'A' && char <= 'Z') {
    console.log("The Character is an Alphabet.");
}
else {
    console.log("The Character is not an Alphabet.");
}
