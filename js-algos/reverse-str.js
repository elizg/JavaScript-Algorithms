// reverse and return a str
function reverse(str) {
    var rtnStr = '';
    for(let i = str.length - 1; i >= 0; i--){
      rtnStr += str[i]
    }
    return rtnStr;
  }
  
  reverse('learning everyday');
  // output: "yadyreve gninrael"