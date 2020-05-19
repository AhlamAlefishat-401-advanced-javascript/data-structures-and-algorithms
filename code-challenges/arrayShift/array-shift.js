'use strict';
function insertShiftArray(arr,val){
    let position= Math.ceil(arr.length/2);
    let shiftedArr = [];
    shiftedArr[position]=val;

    for (let i=0; i < position; i++){
        shiftedArr[i]= arr[i];
    }
    for (let i= arr.length; i> position; i--){
        shiftedArr[i]= arr[i-1];
    }
    return shiftedArr ;
}


console.log(insertShiftArray([2,4,6,8], 5));

module.exports = insertShiftArray;