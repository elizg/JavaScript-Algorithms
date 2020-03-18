// Print numbers 1-100 with the following considered: for multiples of 3, print 'Fizz' for multiples of 5, print 'Buzz' for multiples of both 3 & 5, print 'FizzBuzz'
function fizzBuzz() {
    for(let i = 1; i <= 100; i++) {
      if (i % 15 === 0) {
        console.log("FizzBuzz");
      } 
      else if (i % 3 === 0) {
        console.log("Fizz");
      }
      else if (i % 5 === 0) {
        console.log("Buzz");
      }
      else {
        console.log(i);
      }
    }
  }
  fizzBuzz();
  /*
  output:
  1
  2
  Fizz
  4
  Buzz
  Fizz
  7
  etc...
  */