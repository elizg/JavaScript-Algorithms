// return the single digit sum of all digits of any given number
function sumDigits(num) {
  var sum = 0;
  while (num > 9) {
    while (num > 9) {
      sum += num % 10;
      num = Math.floor(num / 10);
    }
    sum += num % 10;
    num = sum;
    sum = 0;
  }
  return num;
}

sumDigits(12345);
// output: 6

// TODO update sumDigits for negative number
