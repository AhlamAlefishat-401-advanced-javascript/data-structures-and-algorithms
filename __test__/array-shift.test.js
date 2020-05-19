'use strict'; 

const insertShiftArray = require('../code-challenges/arrayShift/array-shift.js');

describe('Shift Array', () => {
  it('return an array with the new value added at the middle index.', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
  });

});