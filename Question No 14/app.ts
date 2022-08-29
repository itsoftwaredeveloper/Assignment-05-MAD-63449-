var input1 : string | null = prompt("Enter the Value of First Angle");
var input2 : string | null = prompt("Enter the Value of Second Angle");
var input3 : string | null = prompt("Enter the Value of Third angle ");
var angle1 : number = Number(input1);
var angle2 : number = Number(input2);
var angle3 : number = Number(input3);
var sum : number = angle1 + angle2 + angle3;
console.log("Sum of all  Angles are:" , sum)
if(sum == 180)
{
    console.log("This is valid triangle")
}
else
{
    console.log("This is invalid triangle")
}