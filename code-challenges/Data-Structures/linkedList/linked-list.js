class Node {
  constructor(data) {
    this.value = data;
    this.next = null;

  }

}

class linkedList {
  constructor() {
    this.head = null;

  }

  insert(value='') {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
      return this;
    }
    let current = this.head;
    while(current.next){
      current = current.next;
    }

    current.next = newNode;
    return this;

  }
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.data === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString(){
    //"{ a } -> { b } -> { c } -> NULL";
    let current = this.head;
    let str = `{ ${current.value} }`;
    while(current.next){
      current = current.next;
      str += ` -> { ${current.value} }`;
     
    }
    return str + ' -> NULL ';
  }
}

module.exports.linkedList = linkedList;