# week9-practices-solution

### 1. You are given an array of objects representing students' exam scores.

Each object has the following properties:

- name: The student's name (a string).
- score: The student's score on the exam (a number).

Your task is to create a new array that contains only the names of students who passed the exam. A passing score is defined as a score of 70 or higher. Additionally, you should convert the names to uppercase in the new array. Write a function getPassingNames that takes an array of student objects and returns an array of uppercase names of students who passed the exam.

For exmaple, getPassingNames([
{ name: 'Alice', score: 85 },
{ name: 'Bob', score: 92 },
{ name: 'Charlie', score: 68 },
{ name: 'David', score: 55 },
{ name: 'Eve', score: 78 }
]) the function should return ["ALICE", "BOB", "EVE"]

### 2. Write a function populateArray(length, value) that creates an array of given length and fills it with the specified value.

For example, populateArray(3, 'a') the function should return ['a', 'a', 'a']

### 3. Write a function that takes an array of numbers and returns an object with the following properties:

- min: the minimum value in the array
- max: the maximum value in the array

For example, given the array [1, 2, 3, 4, 5], the function should return:
{ min: 1, max: 5 }
