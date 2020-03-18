// return the nth number in the fibonacci sequence
function fibonacci(n) {
  var arr = [0, 1];
  if (n <= 2) return 1;
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

fibonacci(12);
// output: 144





// fibonacci alternate
function fibonacci(num) {
  // declare vars
  var a = 1;
  var b = 0;
  var temp;

  // add while loop
  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

fibonacci(9);
// output: 55