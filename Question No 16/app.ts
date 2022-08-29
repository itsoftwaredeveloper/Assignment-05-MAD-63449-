var input1 : string | null = prompt("Enter the First Side")
var input2 : string | null = prompt("Enter the Second Side")
var input3 : string | null = prompt("Enter the Third Side")
var side1 : number = Number(input1)
var side2 : number = Number(input2)
var side3 : number = Number(input3)
console.log("The First Side is:" ,side1)
console.log("The Second Side is:" ,side2)
console.log("The Third Side is:" ,side3)
if(side1 == side2 && side2 == side3 )
{
    console.log("The Triangle is Equilateral")
}
else if(side1 == side2 || side2 == side3)
{
    console.log("The Triangle is Isoceles")
}
else if(side1 != side2 || side1 != side3)
{
    console.log("The Triangle is Scalene")
}