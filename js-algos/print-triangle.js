// print a triangle
function printTriangle(n) {
    for (let i = 0; i < n; i++) {
      var str = '';
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
  /*
  output:
         #
        ###
       #####
      #######
     #########
    ###########
   #############
  ###############
 #################
 */