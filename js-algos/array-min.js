// find and return the minimum number in an array
function arrayMin(arr) {
    let len = arr.length, min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  };
  arrayMin([3,6,9,1]);
  // output: 1
  