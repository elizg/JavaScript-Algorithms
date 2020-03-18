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
  
  subStr(myString, 1, 6);
  // output: "ello!"