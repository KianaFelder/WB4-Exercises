"use strict";

let sum = 0;

function add(x, y, z)
{
  let sum = x + y + z;
  return sum;
}
function display()
{
  console.log(sum);
}

sum = add(1, 2, 3);
sum = add(3, 4, 5);
display();

let a = 5, b = 3, c = 4, d = 2;
let answer = a + b * c - d;
console.log(answer);