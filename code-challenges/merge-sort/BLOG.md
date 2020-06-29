# Merge Sort

## Challenge
  - Review the pseudocode below, then trace the algorithm by stepping through the process with the provided sample array. Document your explanation by creating a blog article that shows the step-by-step output after each iteration through some sort of visual.

  - Once you are done with your article, code a working, tested implementation of Insertion Sort based on the pseudocode provided.

## Pseudocode
   ALGORITHM Mergesort(arr)
     DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left

## Approach & Efficiency
  
- 1:
  - Divide the array in two arrays left =[8,4,23], right=[42,16,15]
  - Start by comparing [4] with [8], and placing the two single element arrays back into a 2 element array with left= [4,8], right = [23] We also compare [42] with [16] and move them back into 2 element array with left= [16,42] and right= [15].

- 2:
  - Compare the front element of each array, which ever array has the smaller value at this position moves its value into the original array and the counters for this array and the original array are incremented. In our case, on the left side we have to compare [4,8] and [23], and on the right we have [16,42] and [15]. These merge into [4,8,23] and [15,16,42].

- 3:
  - Merge [4,8,23] and [15,16,42]. We merge these in the same process as the above step, starting at the head of the array and moving down.

- 4:
  - return the sorted array of [4,8,15,16,23,42].


## Big O :
  - Time: O(n)
    - Because I used loops.
  - Space: O(n) 
    - Because I return array.

# UML
  
  