'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
  
class Stack {
  constructor() {
    this.top = null;
  }
  
  push(value) {
    let newNode = new Node(value);
    this.next = this.top;
    this.top = newNode;
  }
  
  pop() {
  
    if (this.top === null) {
      return 'NullReferenceException';
    }
    let top = this.top;
    this.top = top.next;
    return top.value;
  
  }
  
  peek() {
    if (this.top === null) {
      return 'NullReferenceException';
    } else {
  
      return this.top.value;
    }
  
  }
  
}
  
  
class PseudoQueue {
  constructor(){
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }
  
  enqueue(value){
    this.stack1.push(value);
  }
  
  dequeue(){
    if (this.stack2.length === 0) {
      if (this.stack1.length === 0) {
        return null;
      }
      while (this.stack1.length > 0) {
        let pop1 = this.stack1.pop();
        this.stack2.push(pop1);
      }
    }
    return this.stack2.pop();
  }
}
  

const queue = new PseudoQueue();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);
queue.enqueue(20);
console.log(queue.stack1);


queue.enqueue(20);
queue.enqueue(15);
queue.enqueue(10);
queue.enqueue(5);
queue.dequeue();
console.log(queue.stack2);
