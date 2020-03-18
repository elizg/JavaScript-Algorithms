// return the second to last value in an array
function secondToLast(arr) {
  var len = arr.length;
  if (arr instanceof Array) {
    if (len < 2) return null;
    return arr[len - 2];
  }
}
secondToLast([1, 2, 3, 4, 5, 6, 7]);
// output: 6
