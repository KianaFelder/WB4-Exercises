"use strict";
// Identify the array
let lunch = [
    {item: "Steak Fajitas", price: 16.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    //identify the variable 
    let subtotal = 0
    let numOfItems = lunch.length
    let taxRatePct = .08
    let tipRatePct = .18

    for(let i = 0; i < numOfItems; i++){
        subtotal += lunch[i].price;
        //total = total + lunch[i].price;
    }

    //console.log(i);
    //console.log(lunch[i].price);

    console.log("Your total is " + subtotal)

let totalTax = subtotal * taxRatePct;

console.log("Your tax total is " + totalTax);

//let totalTip = subtotal * taxRatePct * tipRatePct;

//let subtotalWithTax = subtotal + totalTax;

//let totalTip = subtotalWithTax * tipRatePct;

let totalTip = (subtotal + totalTax) * tipRatePct;

console.log("Your tip total is " + totalTip);

let grandTotal = subtotal + totalTip + totalTax;

console.log("Your total is " + grandTotal );
