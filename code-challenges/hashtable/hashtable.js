'use strict';
class Node {
  constructor(value){
    this.value=value;
    this.next=null;
  }
}

class Linkedlist{
  constructor(){
    this.head =null;
  }

  add(value){
    const node= new Node(value);

    if (!this.head){
      this.head=node;
      return;
    }
    let current = this.head;
    while(current.next){
      current=current.next;
    }
    current.next=node;
  }

  values(){
    let values=[];
    let current=this.head;
    while(current){
      values.push(current.value);
      current=current.next;
    }
    return values;
  }
}

class Hashmap{
  constructor(size){
    this.size=size;
    this.map= new Array(size);
  }

  hash(key){
    return key.split('').reduce((p,n)=>{
      return p+n.charCodeAt(0);
    }, 0)*599%this.size;
  }
  

  add(key, value){
    let hash=this.hash(key);
    if(!this.map[hash]){
      this.map[hash]= new Linkedlist();
    }
  
    let entry={[key]:value};
    this.map[hash].add(entry);
  }
  get(key) {
    const value = this.hash(key);
    while (this.map[value] !=  key){
      if(this.map[value] !== undefined) return this.map[value];
      else return undefined; 
    }
  }
  contains(key){
    let value = this.get(key);
    if(value) return true;
    else return false;
  }
}


let myHashmap = new Hashmap(1024);
myHashmap.add('Job', 'developer');
myHashmap.add('Name' ,'Ahlam');

myHashmap.map.forEach( (data, i )=> {
  console.log(i, data && data.values());
});
console.log('??', myHashmap.contains('Job'));
module.exports = Hashmap;