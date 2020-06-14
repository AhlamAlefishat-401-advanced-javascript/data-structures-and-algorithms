'use strict';
function multiBracketValidation(input){
  const arr =  [];

  for(let i =0 ; i < input.length ; i++){
    if(input[i] === '(' || input[i] === '{' || input[i] === '['){
      arr.push(input[i]);
    }
    if((input[i] === ')' && arr[arr.length - 1] === '(') 
        || (input[i] === '}' && arr[arr.length - 1] === '{')
        || (input[i] === ']' && arr[arr.length - 1] === '[')){
      arr.pop();
    }else if((input[i] === ')' && arr[arr.length - 1] !== '(') 
        || (input[i] === '}' && arr[arr.length - 1] !== '{')
        || (input[i] === ']' && arr[arr.length - 1] !== '[')){
      return false;
    }
  }
  if(arr.length === 0){
    return true;
  }else{
    return false;
  }  
}


// console.log( multiBracketValidation('{}'));//true
// console.log( multiBracketValidation('{}(){}'));//true
// console.log( multiBracketValidation('()[[Extra Characters]]'));//true
// console.log( multiBracketValidation('(){}[[]]'));//true
// console.log( multiBracketValidation('{}{Code}[Fellows](())'));//true
// console.log( multiBracketValidation('[({}]'));//false
// console.log( multiBracketValidation('(]('));//false
// console.log( multiBracketValidation('{(})'));//false
console.log( multiBracketValidation(')('));
