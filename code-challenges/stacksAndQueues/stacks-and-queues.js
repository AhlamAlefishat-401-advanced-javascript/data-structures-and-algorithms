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


module.exports={
  Stack,
  Queue,
  Node,
}
;


