// sort a given array
function bubbleSort(arr) {
  var n = arr.length;
  while (n > 1) {
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
    n--;
  }
  return arr;
}

console.log(bubbleSort([99, 3, 7, 21, 33, 6, 43, 90, 7, 1]));
// output: (10) [1, 3, 6, 7, 7, 21, 33, 43, 90, 99]
