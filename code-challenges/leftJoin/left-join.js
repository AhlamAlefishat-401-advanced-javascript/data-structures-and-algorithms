'use strict';

function left_join(hash1, hash2) {
  let output = [];

  for (const key in hash1) {
    let arr = [];
    arr.push(key, hash1[key]);

    if (hash2[key]) {
      arr.push(hash2[key]);
    } else {
      arr.push(null);
    }
    output.push(arr);
  }
  return output;
}


const hash1 = { 'fond':'enamored','warth':'anger','diligent':'employed','outfit':'grab','guide':'usher'};
const hash2 = { 'fond':'averse','warth':'delight','diligent':'idle','guide':'follow','flow':'jam'};

console.log(left_join(hash1, hash2));

module.exports = left_join;