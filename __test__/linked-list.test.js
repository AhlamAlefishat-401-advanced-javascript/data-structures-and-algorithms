const linkedList = require('../code-challenges/Data-Structures/linkedList/linked-list.js');

describe('linkList Module', () => {
  const linked = new linkedList.linkedList();
  const theHead = 'head';
  const secondNode = 20;
  it('Successfully instantiate an empty linked list', () => {
    expect(linked.head).toBeNull();
  });
  it('Inserted into the linked list', () => {

    expect(linked.insert(theHead)).toEqual({ head:  { value: 'head', next: null } });
  });
  it('The head property pointed to the first node in the linked list', () => {
    expect(linked.head.value).toEqual(theHead);
  });
  it('Multiple nodes inserted into the linked list', () => {
    expect(linked.insert(secondNode)).toEqual({ head:  { value: 'head', next: { value: 20, next: null } } });
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
});