'use strict';

let mergeSort = require('../mergeSort/mergeSort');

describe('Merge Sort', ()=> {
  it('merge sort for array reverse)', ()=> {
    let arr = [20,18,12,8,5,-2];
    expect(mergeSort.mergeSort(arr)).toEqual([-2, 5, 8, 12, 18, 20]);
  });
  it('merge sort for nearly sorted array)', ()=> {
    let arr = [2,3,5,7,13,11];
    expect(mergeSort.mergeSort(arr)).toEqual([2, 3, 5, 7, 11, 13]);
  });
  it('merge sort for Few uniques array', ()=> {
    let arr = [5,12,7,5,5,7];
    expect(mergeSort.mergeSort(arr)).toEqual([5, 5, 5, 7, 7, 12]);
  });
  it('merge sort for sorted array', ()=> {
    let arr = [0, 9, 10, 12, 18, 33];
    expect(mergeSort.mergeSort(arr)).toEqual([0, 9, 10, 12, 18, 33]);
  });
});