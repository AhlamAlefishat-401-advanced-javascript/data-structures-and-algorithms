# Challenge Summary
## Queue with Stacks
## Implement a Queue using two Stacks

## Challenge Description
### Implement a Queue using two Stacks


## Approach & Efficiency
### Create a brand new PseudoQueue class.Do not use an existing Queue.Instead, this PseudoQueue class will implement our standard queue interface (the two methods enqueue and dequeue), but will internally only utilize 2 Stack objects.
### enqueue(value) which inserts value into the PseudoQueue, using a first-in, first-out approach.
### dequeue() which extracts a value from the PseudoQueue, using a first-in, first-out approach.


## Big (O)
- Time O(1)

- Space O(n)

- Peek : O(1)
- isEmpty : O(1)
- enqueue : O(1)
- dequeue : Time O(2) <-- (pop then push) & Space O(n)


## Solution
### UML
![](https://github.com/AhlamAlefishat-401-advanced-javascript/data-structures-and-algorithms/blob/master/assets/queueswithstacks.jpg)
