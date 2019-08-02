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




