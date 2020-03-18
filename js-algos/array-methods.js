// push element(s) into end of array
array.push(item1, item2, item3);

// pop(); remove element from end of array
// takes no parameter
array.pop();

// unshift(); add element(s) to beginning of array, shifts indices, returns added items
array.unshift(item1, item2);

// shift(); remove elements from beginning of array, shift indices, returns removed item
// takes no parameter
array.shift();

// splice(); start at location to start, pass deleteCount
array.splice(start, deleteCount, item1, item2);
// splice is very useful bc it can easily remove/add elements from particular location
// paramaters are inclusive