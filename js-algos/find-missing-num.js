// find the missing number in an array
function findMissingNum(arr) {
    var sum = 0;
    for( let i in arr) {
      sum += arr[i];
    }
    const n = arr.length + 1;
    expectedSum = Math.floor((n*(n + 1))/2);
    return expectedSum - sum;
  }
  findMissingNum([1,2,3,4,5,6,8,9]);
  // output: 7