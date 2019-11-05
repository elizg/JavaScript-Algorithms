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
  let rtnStr = '';
  for(let i = str.length - 1; i >= 0; i--){
    rtnStr += str[i]
  }
  return rtnStr;
}

reverse('learning everyday');


// sort a given array
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
  for (let i = 0; i < n; i++) {
    let str = '';
    for (let j = 1; j < n-i; j++) {
      str += ' ';
    }
    for (let k = 1; k <= (2*i+1); k++) {
      str += '#';
    }
    console.log(str);
  }
}
printTriangle(9);

// print shapes using a switch case: square, triangle
// TODO update 
function printShape(shape, height, char) {
  let ln = "";
  switch (shape) {
    case "triangle":
      for (let i = 1; i <= height; i++) {
        for (let j = 1; j <= i; j++) {
          if (j <= i) {
            ln += char;
          }
        }
        console.log(ln);
        ln = ""
      }
      break;
      
    case "square":
      for (let i = 0; i < height; i++) {
        ln += char;
      }
      for (let i = 0; i < height; i++) {
        console.log(ln);
      }
      break;
    }
  }
  
  console.log(printShape('square', 3, '%'));
  console.log(printShape('triangle', 3, '$'));


  // shuffle any given array
  function shuffle(arr) {
    for (let i = 0; i < arr.length; i++){
      randIdx = Math.floor(Math.random() * (arr.length-1));
      temp = arr[i];
      arr[i] = arr[randIdx];
      arr[ranIdx] = temp;
    }
    return arr;
  }

shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);
// output: (13) [2, 4, 6, 7, 13, 10, 8, 5, 11, 9, 1, 12, 3]


// square each value in a given array
function squareArrVals(arr){
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * arr[i]
  }
  return arr
}
squareArrVals([2, 3, 4, 5, 7, 9, 100, 500, 1200]);
// output: (9) [4, 9, 16, 25, 49, 81, 10000, 250000, 1440000]


// print odds 1-99
function printOdds(num) {
  for (let i = 1; i < num; i++) {
    if(i % 2 === 1) {
      console.log(i);
    }
  }
}
printOdds(100);
// more concise
for(let i = 1; i < 100; i += 2) console.log(i);



// swap pairs in a given array
function swapPairs(arr){
  for(let i = 0; i < arr.length; i += 2){
      if(arr[i + 1] == undefined){
          break;
      }
      let temp = arr[i];
      arr[i]= arr[i + 1];
      arr[i + 1]= temp;
  }
  return arr;
}
swapPairs([1, 2, 3, 4]);
// output: (4) [2, 1, 4, 3]



// take in two arrays and concatenate without using built in concat()
function concatArrs(arr1, arr2){
  let newArr = [];
  for(let i = 0; i < arr1.length; i++){
      newArr.push(arr1[i]);
  }
  for(let j = 0; j < arr2.length; j++){
      newArr.push(arr2[j]);
  }
  return newArr;
}
console.log(concatArrs(["a", "b", "c"], [1, 2, 3]));
// output: (6) ["a", "b", "c", 1, 2, 3]



// count how many characters are in a given string, do not count spaces
function countChars(str){
  let splitString = str.split(" ");
  let joinString = splitString.join("");
  return joinString.length;
}
console.log(countChars("You are my sunshine")); // output: 16
console.log(countChars("You are my sunshine <3")); // output: 18



// push item(s) into end of array
array.push(item1, item2, item3);
// unshift(); add item(s) to beginning of array, shifts indices, returns added items
array.unshift(item1);
// pop(); remove item from end of array
array.pop();
// shift(); remove item from front of array, shift indices, returns removed item
array.shift(item1);



// find and return the minimum number in an array
function arrayMin(arr) {
  let len = arr.length, min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
};
arrayMin([3,6,9,1]);



// find the min val of an array and move it to idx 0
function minToFront(arr){
  let min = 0;
  for (let i = 1; i < arr.length; i ++){
      if (arr[i] < arr[min]){
          min = i;
      }
  }
  let temp = arr[min];
  for (let i = min; i > 0; i--){
      arr[i] = arr[i - 1];
  }
  arr[0] = temp;
  return arr;
}

console.log(minToFront([99, 125, 32, 1, 24, 265, 3]));
// output: (7) [1, 99, 125, 32, 24, 265, 3]



// return the sum of all digits of a number
function sumDigits(num){
  let sum = 0;
  while(num > 9){
      while(num > 9){
          sum += num % 10
          num = Math.floor(num/10);
      }
      sum += num % 10
      num = sum;
      sum = 0;
  }
  return num
}
console.log(sumDigits(11));
// output: 2
console.log(sumDigits(345));
// output: 3
console.log(sumDigits(12345));
// output: 6

// TODO update sumDigits for negative number