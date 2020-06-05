'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
    this.emptyStack = [];
  }
  push(value){
    const newNode= new Node(value );
    this.emptyStack.unshift(newNode);
    this.top = value;
    return this.top;
  }
  pop(){
    const removeTop = this.emptyStack.shift(); 
    this.top = this.emptyStack[0] ? this.emptyStack[0] : null ; 
    return removeTop;
  }
  peek(){
    return this.top;
  }
  isEmpty(){
    if( this.top == null){
      return true;
    }else{
      return false;
    }
      
  }
  
}
const stack = new Stack();
console.log('empty stack?',stack.isEmpty());
console.log(stack.push(3));
console.log(stack.push(4));
console.log('top node on stack',stack.peek());
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack.isEmpty());

class Queue{
  constructor(){
    this.front=null;
    this.emptyQueue= [];
  }
  enqueue(value){
    const newNode = new Node(value);
    this.emptyQueue.push(newNode);
    this.front=value;
    return this.front;
  }
  dequeue(){
    return this.emptyQueue.shift();
  }
  peek(){
    return this.emptyQueue[0];
  }
  isEmpty(){
    if(this.emptyQueue[0]){
      return false;
    }else{
      return true;
    }
  }

}
const queue = new Queue();
console.log('empty queue?',queue.isEmpty());
console.log(queue.enqueue(3));
console.log(queue.enqueue(7));
console.log('front node on queue',queue.peek());
console.log(queue.isEmpty());
console.log(queue.dequeue());
console.log(queue.isEmpty());


module.exports={
  Stack,
  Queue,
}
;


