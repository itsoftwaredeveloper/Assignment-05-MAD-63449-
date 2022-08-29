var Input = prompt("Please input Month Number from 1 to 12");
var Month = Number(Input);
console.log("The Input Value is:", Input);
if (Month == 1 || Month == 3 || Month == 5 || Month == 7 || Month == 8 || Month == 10 || Month == 12) {
    console.log("The Number of Days in this Month are 31.");
}
else if (Month == 4 || Month == 6 || Month == 9 || Month == 11) {
    console.log("The Number of Days in this Month are 30.");
}
else if (Month == 2) {
    console.log("The Number of Days in this Month are 28 or 29.");
}
else {
    console.log("Pleae enter Valid Month Number");
}
