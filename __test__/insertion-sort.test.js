'use strict';

const sort = require('../code-challenges/insertion-sort/isertion-sort.js');

describe('selection sort', () => {
  it('Reverse-sorted', () => {
    const arr = [20,18,12,8,5,-2]; 
    const expected = [ -2, 5, 8, 12, 18, 20 ];
    expect(sort.InsertionSort(arr)).toEqual(expected);
  });
  it('Nearly-sorted', () => {
    const arr = [2,3,5,7,13,11]; 
    const expected = [ 2, 3, 5, 7, 11, 13 ];
    expect(sort.InsertionSort(arr)).toEqual(expected);
  });
  it('Few uniques', () => {
    const arr = [5,12,7,5,5,7]; 
    const expected = [ 5, 5, 5, 7, 7, 12 ];
    expect(sort.InsertionSort(arr)).toEqual(expected);
  });

});