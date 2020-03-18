// print shapes using a switch case: square, triangle
// TODO revisit 
function printShape(shape, height, char) {
    var ln = "";
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