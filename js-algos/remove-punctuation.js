// remove the punctuation from a given string
function removePunctuation(str, len) {
  if (typeof str == "string" && typeof len == "number") {
    var s = "";
    var start = str.length - 1;
    var total = str.length;
    while (total > len && start >= 0) {
      if (
        str[start] == "." ||
        str[start] == "," ||
        str[start] == "!" ||
        str[start] == "?" ||
        str[start] == ";" ||
        str[start] == ":" ||
        str[start] == "-" ||
        str[start] == "'"
      ) {
        start--;
        total--;
      }
      s += str[start];
      start--;
    }
    for (let i = start; i >= 0; i--) {
      s += str[i];
    }
    let reversedString = "";
    for (let i = s.length - 1; i >= 0; i--) reversedString += s[i];
    return reversedString;
  }
}
removePunctuation("Hello, can you remove the punctuation? Thank you!", 1);
// output: "Hello can you remove the punctuation Thank you"
// TODO review removePunctuation
