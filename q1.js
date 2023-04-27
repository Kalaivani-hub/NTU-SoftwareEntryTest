/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console
    Task 2
    - invoke the function "swap"
*/
function swap(x, y) {
    // check if x and y are numeric
    if (typeof x !== 'number' || typeof y !== 'number') {
      return -1;
    }
    
    // swap the values
    x = x + y;
    y = x - y;
    x = x - y;
    
    // print the swapped values
    console.log('Swapped values: x =', x, 'y =', y);
  }
 // Task 2
  // example usage
  swap(5, 10); // Swapped values: x = 10 y = 5
  