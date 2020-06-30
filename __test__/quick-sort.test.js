'use strict';

const quickSort = require('../code-challenges/quick-sort/quick-sort');


describe('Quick Sort', () => {
  it('quickSort() is return sorted array', () => {
    let arr= [8, 4, 23, 42, 16, 15];
    let expected=[4, 8, 15, 16, 23, 42];
    expect(quickSort(arr, 0,arr.length-1)).toEqual(expected);
   
  });
});