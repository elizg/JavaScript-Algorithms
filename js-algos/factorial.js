function factorial(someNum) 
{ 
  if (someNum === 0)
 {
    return 1;
 }
  return someNum * factorial(someNum - 1);  
}
console.log(factorial(5));
// output: 120