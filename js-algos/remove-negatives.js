// remove the negative numbers from an array
function removeNeg(arr) {
  var position = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      continue;
    } else {
      arr[position] = arr[i];
      position++;
    }
  }
  arr.length = position;
  return arr;
}
removeNeg([-99, -25, -4, 0, 1, 2, 3, 4, 5, -700]);
// output: (6) [0, 1, 2, 3, 4, 5]
