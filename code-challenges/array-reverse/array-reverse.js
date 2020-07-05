'use strict';
let array = [];
function reverseArray(arrayOfNumbers){
  for(let i=arrayOfNumbers.length-1; i >= 0 ; i--){
    array.push(arrayOfNumbers[i]);
  }
  return array;
}
let myArr= [10,20,30,40,50,60,70,80,90,100];

let reversedArr = reverseArray( myArr);

console.log(reversedArr);