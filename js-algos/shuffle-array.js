// shuffle any given array
function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    randIdx = Math.floor(Math.random() * (arr.length - 1));
    temp = arr[i];
    arr[i] = arr[randIdx];
    arr[randIdx] = temp;
  }
  return arr;
}

shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
// output random shuffle ex: (13) [9, 2, 5, 6, 10, 3, 8, 13, 12, 7, 1, 4, 11]
