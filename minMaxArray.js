// Write a function that takes an array of numbers and returns an object with the following properties:
// min: the minimum value in the array
// max: the maximum value in the array
// For example, given the array [1, 2, 3, 4, 5], the function should return:
// { min: 1, max: 5}

function minMaxArray(arr) {
  const min = arr.reduce((min, num) => Math.min(min, num))
  const max = arr.reduce((max, num) => Math.max(max, num))
  const sum = arr.reduce((sum, num) => sum + num)
  return { min, max }
}
console.log(minMaxArray([1, 2, 3, 4, 5]))
