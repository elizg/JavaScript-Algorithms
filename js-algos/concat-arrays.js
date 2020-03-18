// take in two arrays and concatenate without using built in concat()
function concatArrs(arr1, arr2) {
  var newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let j = 0; j < arr2.length; j++) {
    newArr.push(arr2[j]);
  }
  return newArr;
}
console.log(concatArrs(["a", "b", "c"], [1, 2, 3]));
// output: (6) ["a", "b", "c", 1, 2, 3]
