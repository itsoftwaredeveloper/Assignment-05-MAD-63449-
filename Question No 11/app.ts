var Input : string | null = prompt("Please Enter the Day from 1 to 7");
var week : number = Number (Input)
console.log("The Input Value is:", Input)
if (week==1) {
    console.log ("The Day is Friday.")
}
else if (week ==2) {
    console.log ("The Day is Saturday.")
}
else if (week ==3) {
    console.log ("The Day is Sunday.")}

else if (week ==4) {
        console.log ("The Day is Monday.")
}
else if (week ==5) {
    console.log ("The Day is Tuesday.")
}
else if (week ==6) {
    console.log ("The Day is Wednesday.")
}
else if (week ==7) {
    console.log ("The Day is Thursday.")
}
else
{
    console.log ("Alert: Invalid Entry! 'Please enter number from 1 to 7'")
}