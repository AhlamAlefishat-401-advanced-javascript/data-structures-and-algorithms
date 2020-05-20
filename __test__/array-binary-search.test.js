'use strict'; 

const binarySearch = require('../code-challenges/arrayBinarySearch/array-binary-search');

describe('Search the array',() =>{
    it('Return the index of the element',() => {
        expect(binarySearch([4,8,15,16,23,42] ,15)).toStrictEqual(2);   
    });
});