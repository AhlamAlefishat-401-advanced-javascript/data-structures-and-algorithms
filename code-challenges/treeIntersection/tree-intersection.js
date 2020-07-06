'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(root) {
    this.root = root;
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
  
}

function tree_intersection(tree1,tree2){
  let intersection = [];
  tree1.forEach(val =>{
    if(tree2.includes(val)) intersection.push(val);
  });
  return intersection;
}

const one = new Node(150);
const two = new Node(100);
const three = new Node(250);
const four = new Node(350);
const five = new Node(200);
const six = new Node(75);
const seven = new Node(160);
const eight = new Node(125);
const nine = new Node(175);
const ten = new Node(300);
const eleven = new Node(500);

one.left = two;
one.right = three;
three.right = four;
three.left = five;
two.left = six;
two.right = seven;
seven.left = eight;
seven.right = nine;
four.left= ten;
four.right=eleven;
const tree = new BinaryTree(one);
let treeOne = tree.inOrder();


const _one = new Node(42);
const _two = new Node(100);
const _three = new Node(600);
const _four = new Node(350);
const _five = new Node(200);
const _six = new Node(15);
const _seven = new Node(160);
const _eight = new Node(125);
const _nine = new Node(175);
const _ten = new Node(4);
const _eleven = new Node(500);
_one.left = _two;
_one.right = _three;
_three.right = _four;
_three.left = _five;
_two.left = _six;
_two.right=_seven;
_seven.left = _eight;
_seven.right = _nine;
_four.left=_ten;
_four.right=_eleven;
const tree2 = new BinaryTree(_one);
let treeTwo = tree2.inOrder();

console.log('intersection',  tree_intersection(treeOne,treeTwo));
