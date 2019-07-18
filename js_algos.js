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






  




