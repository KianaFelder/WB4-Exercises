"use strict";

let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
    ];

    let numOfItems = lunch.length

    for(let i = 0; i < numOfItems; i++){
        //console.log(i);
        console.log(lunch[i].price);
        console.log(lunch[i].item)
    }