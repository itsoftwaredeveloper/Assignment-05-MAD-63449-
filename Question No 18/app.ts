var Selling_Price : number = 1000;
var Cost_Price : number = 500;
var amount: number = 0;

if (Selling_Price > Cost_Price) {
    console.log ("The Profit Amount is:", Selling_Price - Cost_Price)
}
else if (Cost_Price > Selling_Price) {
    console.log ("The Loss Amount is:", Cost_Price - Selling_Price)
}
else
{
    console.log ("No Profit No Loss")
}