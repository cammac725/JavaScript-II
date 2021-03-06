// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

// const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/
const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

// getLength passes the length of the array into the callback.

function getLength(arr, cb) {
  return cb(arr.length);
}

function displayLength(x) {
  console.log(x);
}

getLength(items, displayLength);
// function (cb) {
//   console.log(cb);
// });


// last passes the last item of the array into the callback.

function last(items, cb) {
  return cb(items[items.length - 1]);
}

last(items, function (cb) {
  console.log(cb);
});


// sumNums adds two numbers (x, y) and passes the result to the callback.

function sumNums(x, y, callback) {
  return callback(x, y);
}
function add(a, b) {
  return a + b;
}
console.log(sumNums(3, 8, add));


// multiplyNums multiplies two numbers and passes the result to the callback.

function multiplyNums(x, y, callback) {
  return callback(x, y);
}
function multiply(a, b) {
  return a * b;
}
console.log(multiplyNums(4, 5, multiply));


// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.

function contains(item, list, callback) {
  return callback(item, list);
}
function check(item, list) {
  if (list.includes(item)) {
    return true;
  } else {
    return false;
  }
}
console.log(contains('popsicle', items, check));


/* STRETCH PROBLEM */

// removeDuplicates removes all duplicate values from the given array.
// Pass the duplicate free array to the callback function.
// Do not mutate the original array.

// let dupeFree = [];

// function removeDuplicates(array, callback) {
//   return callback(array);
// }

// function dupes(array) {
//   array.forEach(function (currentValue) {
//     if
//   });
// }