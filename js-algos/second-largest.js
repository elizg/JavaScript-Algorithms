// return the second largest number in an array
function secondLargest(arr) {
  if (arr instanceof Array) {
    var largest = [arr[0], 0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest[0]) {
        largest[0] = arr[i];
        largest[1] = i;
      }
    }
    arr[largest[1]] = null;
    var secLargest = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (
        largest[0] - arr[i] < largest[0] - secLargest &&
        arr[i] != largest[0]
      ) {
        secLargest = arr[i];
      }
    }
    return secLargest;
  }
}
secondLargest([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// output: 9
