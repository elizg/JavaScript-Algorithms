// find and return the maximum number in a given array
function arrayMax(arr) {
  var len = arr.length,
    max = -Infinity;
  while (len--) {
    if (arr[len] > max) {
      max = arr[len];
    }
  }
  return max;
}
arrayMax([1, 2, 3, 99, 5]);
// output: 99
