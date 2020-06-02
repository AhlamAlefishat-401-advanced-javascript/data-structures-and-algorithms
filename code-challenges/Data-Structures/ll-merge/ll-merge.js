'use strict';
const linkedList = require('../linkedList/linked-list.js').LinkedList;

let L1 = new linkedList();
let L2 = new linkedList();

L1.append(1);
L1.append(3);
L1.append(2);

L2.append(5);
L2.append(9);
L2.append(4);
L2.append(6);



console.log('L1', L1.toString());
console.log('L2', L2.toString());

function mergeLists(list1, list2) {
  const newList = new  linkedList;
  let firstNode = list1.head;
  let secondNode= list2.head;
  

  while (firstNode || secondNode) {
    if (firstNode) {
      newList.append(firstNode.value);
      firstNode = firstNode.next;
     
    }
    if(secondNode) {
      newList.append(secondNode.value);
      secondNode = secondNode.next;
      
    }
  }

  return newList.toString();
}

console.log('Merged list',mergeLists(L1,L2));
module.exports =mergeLists;
