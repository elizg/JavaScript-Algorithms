// count how many characters are in a given string, do not count spaces
function countChars(str) {
  let splitString = str.split(" ");
  let joinString = splitString.join("");
  return joinString.length;
}
console.log(countChars("You are my sunshine"));
// output: 16
console.log(countChars("You are my sunshine <3"));
// output: 18
