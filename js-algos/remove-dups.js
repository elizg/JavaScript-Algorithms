// remove duplicates from an array
function removeDups(arr) {
    var newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] !== arr[i + 1]) {
        newArr.push(arr[i]);
      }
    }
  return newArr;
  }
  removeDups([1, 2, 3, 3, 4, 5, 5, 5, 6, 7, 8, 9, 9]);
  // output: (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]