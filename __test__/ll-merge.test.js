'use strict';

const linkedList = require('../code-challenges/Data-Structures/linkedList/linked-list.js').LinkedList;

const mergeLists = require('../code-challenges/Data-Structures/ll-merge/ll-merge.js');


describe('Linked List', () => {
  it('mergeLists()', () => {
    let list1 = new linkedList();
    let list2 = new linkedList();
    list1.append('1');
    list1.append('3');
    list1.append('2');

    list2.append('5');
    list2.append('9');
    list2.append('4');
    expect(mergeLists(list1, list2)).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL ');
  });
});

describe('Linked List', () => {
  it('mergeLists() Merge diffrent sizes lists', () => {
    let list1 = new linkedList();
    let list2 = new linkedList();
    list1.append('1');
    list1.append('3');
    list1.append('2');

    list2.append('5');
    list2.append('9');
    list2.append('4');
    list2.append('6');

    expect(mergeLists(list1, list2)).toBe('{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> { 6 } -> NULL ');
  });
});
