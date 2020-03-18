// swap pairs in a given array
function swapPairs(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i + 1] == undefined) {
      break;
    }
    var temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
  return arr;
}
swapPairs([1, 2, 3, 4]);
// output: (4) [2, 1, 4, 3]
