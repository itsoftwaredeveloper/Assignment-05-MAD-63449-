var input:string | null = prompt("Please Enter the Year");
var Year: number = Number(input)

if (Year %4==0){
    console.log ("The Year is Leap.")
}
else  {
    console.log ("The Year is not Leap.")
}