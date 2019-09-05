// check if a str is a palindrome and return true or false
function isPalindrome(str) {
    for(let i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length -1 -i]) {
            return false;
        }
    }
    return true;
}

isPalindrome('radar');



// return the nth number in the fibonacci sequence
function fibonacci(n) {
    let arr = [0, 1];
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
  }
  
  fibonacci(12);

// fibonacci alternate
  function fibonacci(num){
    // declare vars
      let a = 1;
      let b = 0;
      let temp;
    
      // add while loop
      while (num >= 0){
        temp = a;
        a = a + b;
        b = temp;
        num--;
      }
    
      return b;
    }

  fibonacci(9);
  
  
// reverse and return a str
function reverse(str) {
  var rtnStr = '';
  for(var i = str.length - 1; i >= 0; i--){
    rtnStr += str[i];
  }
  return rtnStr;
}

reverse('learning everyday');


// sort any given array
function bubbleSort(arr) {
  let n = arr.length;
  // let temp;
    while(n > 1) {
      for (let i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
      n--;
    }
    return arr;
}

console.log(bubbleSort([99, 3, 7, 21, 33, 6, 43, 90, 7, 1]));


// return the factorial of any given number
function factorial(someNum) 
{ 
  if (someNum === 0)
 {
    return 1;
 }
  return someNum * factorial(someNum - 1);  
}
console.log(factorial(5));


// return the substring of any given string
function subStr(someStr, startIndex, endIndex) {
  if (someStr.length === 0) {
    return 'input string';
   }
  let subStrLength = endIndex - startIndex;
  
  if (subStrLength < 1) {
    return 'string length must be more than one character in order to return a substring';
  }
  let subStr = '';
  
  if (endIndex > someStr.length - 1) {
    subStrLength = someStr.length - startIndex;
  }
  
  for (let i = 0; i < subStrLength; i++) {
    subStr += someStr[i + startIndex];
  }
  return subStr;
}

let myString = 'hello!!';

console.log(subStr(myString, 1, 6));




// There are multiple ways to write each algorithm, I plan to update syntax as I progress

// check if a str is a palindrome and return true or false
function isPalindrome(str) {
    for(let i = 0; i < str.length/2; i++) {
        if(str[i] !== str[str.length -1 -i]) {
            return false;
        }
    }
    return true;
}

isPalindrome('radar');


// return the nth number in the fibonacci sequence
function fibonacci(n) {
    let arr = [0, 1];
    if (n <= 2) return 1;
    for (let i = 2; i <= n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
  }
  
  fib(12);
  
  
// reverse and return a str
function reverse(str) {
  var rtnStr = '';
  for(var i = str.length - 1; i >= 0; i--){
    rtnStr += str[i]
  }
  return rtnStr;
}

reverse('learning everyday');


// sort any given array
function bubbleSort(arr) {
  let n = arr.length;
  // let temp;
    while(n > 1) {
      for (let i = 0; i < n - 1; i++) {
        if(arr[i] > arr[i + 1]) {
          let temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
        }
      }
      n--;
    }
    return arr;
}

console.log(bubbleSort([99, 3, 7, 21, 33, 6, 43, 90, 7, 1]));


// return the factorial of any given number
function factorial(someNum) 
{ 
  if (someNum === 0)
 {
    return 1;
 }
  return someNum * factorial(someNum - 1);  
}
console.log(factorial(5));


// return the substring of any given string
function subStr(someStr, startIndex, endIndex) {
  if (someStr.length === 0) {
    return 'input string';
   }
  let subStrLength = endIndex - startIndex;
  
  if (subStrLength < 1) {
    return 'string length must be more than one character in order to return a substring';
  }
  let subStr = '';
  
  if (endIndex > someStr.length - 1) {
    subStrLength = someStr.length - startIndex;
  }
  
  for (let i = 0; i < subStrLength; i++) {
    subStr += someStr[i + startIndex];
  }
  return subStr;
}

let myString = 'hello!!';

console.log(subStr(myString, 1, 6));


// remove duplicates from a given array
function removeDups(arr) {
  let origArr = [1, 2, 3, 3, 4, 6, 7, 8, 9, 9, 5, 5, 5];
  let newArr = [];
  
  origArr.sort();

  let temp;

  for (let i = 0; i < origArr.length; i++) {
    if(origArr[i] !== temp) {
      newArr.push(origArr[i]);
      temp = origArr[i];
    }
  }
return newArr;
}
removeDups();


// find the missing number in an array
function findMissingNum(arr) {
  let sum = 0;
  for( let i in arr) {
    sum += arr[i];
  }
  let n = arr.length + 1;
  expectedSum = Math.floor((n*(n + 1))/2);
  return expectedSum - sum;
}
findMissingNum([1,2,3,4,5,6,8,9]);


// sum of array
function sumOfArray(arr) {
  return arr.reduce(function(a,b) {
    return a + b
  }, 0);
}
sumOfArray([3, 6, 9]);
// single line arrow notation
const sumOfArr = arr => arr.reduce((a,b) => a + b, 0);
sumOfArr([3,6,9]);


// Print numbers 1-100, for multiples of 3, print 'Fizz' for multiples of 5, print 'Buzz' for multiples of both 3 & 5, print 'FizzBuzz'
function fizzBuzz() {
  for(let i = 0; i <= 100; i++) {
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


// print a triangle
function printTriangle(n) {
  for (var i = 0; i < n; i++) {
    var str = '';
    for (var j = 1; j < n-i; j++) {
      str += ' ';
    }
    for (var k = 1; k <= (2*i+1); k++) {
      str += '#';
    }
    console.log(str);
  }
}
printTriangle(9);

// print shapes using a switch case: square, triangle, and diamond
// RETURN TO ADD SWITCH CASE printShape
