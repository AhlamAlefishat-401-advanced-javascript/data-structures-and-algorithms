'use strict';

const LinkedList = require('../code-challenges/Data-Structures/linkedList/linked-list.js').LinkedList;

describe('linkList Module', () => {
  const linked = new LinkedList();
  const theHead = 'head';
  const secondNode = 20;
  it('Successfully instantiate an empty linked list', () => {
    expect(linked.head).toBeNull();
  });
  it('Inserted into the linked list', () => {

    expect(linked.append(theHead)).toEqual({ head:  { value: 'head', next: null } });
  });
  it('The head property pointed to the first node in the linked list', () => {
    expect(linked.head.value).toEqual(theHead);
  });
  it('Multiple nodes inserted into the linked list', () => {
    expect(linked.append(secondNode)).toEqual({ head:  { value: 'head', next: { value: 20, next: null } } });
    expect(linked.head.value).toEqual(theHead);
    expect(linked.head.next.value).toEqual(secondNode);
  });
  it('True: this value is exists within the linked list',() =>{
    expect(linked.head.value).toBeTruthy();
  });

  it('False:this value does not exists within the linked list', () => {
    expect(linked.includes(250)).toBeFalsy();
  });
  it('Collection of all the values that exist in the linked list', () => {
    expect(linked.toString()).toEqual(`{ ${theHead} } -> { ${secondNode} } -> NULL `);
  });
 

  it('kthFromEnd() When k and the length of the list are the same', () => {
    const list = new LinkedList();
    list.append(10);
    list.append(9);
    list.append(8);
    list.append(7);

    expect(list.kthFromEnd(3)).toStrictEqual(list.head.value);
  });
 
});



