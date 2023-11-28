"use strict";
// declare two arrays of score

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

//Create a function to find the average score
function getAverage(score) {
    let sum = 0;
    
//  Loop through each 
    for(let i = 0; i < score.length; i++) {
        sum += score[i];
    }
    return sum / score.length;
};
console.log(getAverage(myScores));
console.log(getAverage(yourScores));