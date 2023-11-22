"use strict";

const person = {
    name: "Kiana Felder",
    address: "44 True Street",
        city: "Houston",
        state: "Texas",
        zipCode: "54728"
}

const userAddress2 = {
    name: "Stepahanie Wilson",
    address: "33 Hall Street",
    city: "New York",
    state: "NY",
    zipCode: "10031"
}

function printContact(person){
console.log("Name: " + person.name);
console.log("Address: " + person.address);
console.log(`City: `+ person.city + "," + person.state + " " + person.zip);
}

printContact(person)
printContact(userAddress2)