// sum of array
function sumOfArray(arr) {
    return arr.reduce(function(a,b) {
      return a + b
    }, 0);
  }
  sumOfArray([3, 6, 9]);
  // output: 18




  // alternate single line arrow notation
  const sumOfArr = arr => arr.reduce((a,b) => a + b, 0);
  sumOfArr([3,6,9]);
  // output: 18