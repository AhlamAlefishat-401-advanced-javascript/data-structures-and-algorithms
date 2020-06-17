'use strict';
const queue=require('../stacksAndQueues/stacks-and-queues.js');

class Node{
  constructor(value, left =null,right = null){
    this.value=value;
    this.left=left;
    this.right=right;
  }

}

class BinaryTree{
  constructor(root=null){
    this.root=root;
  }
  toString() {
    return JSON.stringify(this);
  }

   
  preOrder(){
    
    
    const result = [];
   
    const _traversal = (node) => {
       
      result.push(node.value);
      if(node.left) _traversal(node.left);
      if(node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return result;

  }
  
  inOrder(){
    const result = [];
    const _traversal = (node) => {
      if(node.left) _traversal(node.left);
      result.push(node.value);
      if(node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return result;
  }
  // Left -> Right -> Root
  postOrder(){
    const result = [];
    const _traversal = (node) => {
      if(node.left) _traversal(node.left);
      if(node.right) _traversal(node.right);
      result.push(node.value);
    };
    _traversal(this.root);
    return result;
  }

  breadthFirst(root){
    const newQueue=new queue.Queue();
    newQueue.enqueue(root);
    while(newQueue.peek()){
      root =newQueue.dequeue();
      return root;
    }
    if(root.left !==null){
      newQueue.enqueue(root.left);
    }
    if(root.right !==null){
      newQueue.enqueue(root.right);
    }

  }
  findMaximumValue() {
    var max = 0;
    const _traversal = (node) => {
      if(max < node.value) max = node.value;
      if (node.left) _traversal(node.left);
      if (node.right) _traversal(node.right);
    };
    _traversal(this.root);
    return max;


  }

}

  
class BinarySearchTree{
  constructor(){
    this.root=null;
  }
  toString() {
    return JSON.stringify(this);
  }
  add(value) {

    const node = this.root;

    
    if (!node) {
      this.root = new Node(value);
      return;
    }else{
      let _add = (node) => {
        if (value < node.value) {
          if (node.left === null) {
            node.left = new Node(value);
            return;
          } else if (node.left !== null) {
            return _add(node.left);
          }

        } else if (value >= node.value) {

          if (node.right === null) {
            node.right = new Node(value);
            return;
          } else if (node.right !== null) {
            return _add(node.right);
          }

        } else {
          return null;
        }
      };
    
      _add(node);
     
    }
  }
  contains(value){
    let node = this.root; 
    while(node){
      if( value === node.value){
        return true;
      }
      if(value < node.value){
        node = node.left;
      }else{
        node = node.right;
      }
    }
    return false;
  }
}

const one = new Node(2);
const two = new Node(7);
const three = new Node(5);
const four = new Node(2);
const five = new Node(6);
const six = new Node(9);
const seven= new Node(5);
const eight = new Node(11);
const nine= new Node(4);



one.left=two;
one.right=three;

two.left=four;
two.right=five;
five.left=seven;
five.right=eight;

three.right=six;
six.left=nine;


const binaryTree = new BinaryTree(one);


console.log(binaryTree.breadthFirst(2));
console.log(binaryTree.toString());
