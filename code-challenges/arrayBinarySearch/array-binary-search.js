function BinarySearch(sortedArr,searchKey){
    for(let i=0; i< sortedArr.length ; i++){
        if(sortedArr[i] === searchKey ){
            return i;
        }
    }
   return -1;
    }
    let arr=[4,8,15,16,23,42];
    console.log(BinarySearch(arr, 15));

module.exports=BinarySearch;