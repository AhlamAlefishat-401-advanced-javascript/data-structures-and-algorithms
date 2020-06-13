'use strict';

const node = require('../stacksAndQueues/stacks-and-queues.js');

class AnimalShelter{
  constructor(){
    this.front=null;
    this.cats=[];
    this.dogs=[];

  }
  enqueue(animal){
    const newNode = new node.Node(animal);
    if(animal === 'cat'){
      this.cats.push(newNode);

    }else if(animal === 'dog'){
      return this.dogs.push(newNode);
    }else{
      return null;
    }
  }
    
  
  dequeue(pref){
    if( pref === 'dog'){
      this.dogs.pop();
      return 'dog';
    }else if(pref === 'cat'){
      this.cats.pop();
      return 'cat';
    }else{
      return null;
    }
  }
}


const animal = new AnimalShelter();
animal.enqueue('hourse');
console.log(animal.cats);
console.log(animal.dogs);
animal.enqueue('dog');
animal.enqueue('cat');
animal.enqueue('dog');
console.log(animal.cats);
animal.enqueue('cat');
animal.enqueue('cat');
animal.enqueue('dog');
console.log(animal.dogs);

console.log(animal.dequeue('cat'));
console.log(animal.dequeue('dog'));
console.log(animal.dequeue('hourse'));

console.log(animal.dogs);
console.log(animal.cats);