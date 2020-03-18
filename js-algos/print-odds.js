// print odds 1-99
function printOdds(num) {
  for (let i = 1; i < num; i++) {
    if (i % 2 === 1) {
      console.log(i);
    }
  }
}
printOdds(100);
