"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 16.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    let total = 0
    let numOfItems = lunch.length
    let totalTax = .08
    let totalTip = .18

    for(let i = 0; i < numOfItems; i++){
        total += lunch[i].price
    }
    //console.log(i);
    //console.log(lunch[i].price);

    console.log("Your total is " + total)