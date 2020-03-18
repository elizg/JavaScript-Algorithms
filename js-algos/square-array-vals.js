// square each value in a given array
function squareArrVals(arr){
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i]
    }
    return arr
  }
  squareArrVals([2, 3, 4, 5, 7, 9, 100, 500, 1200]);
  // output: (9) [4, 9, 16, 25, 49, 81, 10000, 250000, 1440000]