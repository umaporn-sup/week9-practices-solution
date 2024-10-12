// Write a function populateArray(length, value) that creates an array of given length and fills it with the specified value.
function populateArray(length, value) {
  return new Array(length).fill(value)
}

console.log(populateArray(3, 'a')) // ['a', 'a', 'a']
console.log(populateArray(5, 0)) // [0, 0, 0, 0, 0]
