// find the min val of an array and move it to idx 0
function minToFront(arr) {
  var min = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[min]) {
      min = i;
    }
  }
  let temp = arr[min];
  for (let i = min; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}
minToFront([99, 125, 32, 1, 24, 265, 3]);
// output: (7)[(1, 99, 125, 32, 24, 265, 3)];
