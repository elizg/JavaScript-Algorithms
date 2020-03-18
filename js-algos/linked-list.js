// construct linked list and find the average of added node values
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a value to the linked list @param {Object} val
  add(val) {
    var lastNode = this.head;
    var addNode = new node(val);
    this.head = addNode;
    addNode.next = lastNode;
    if (this.back == null) this.back = addNode;
    return this;
  }

  // returns a formatted string of the list
  toString() {
    var node = this.head;
    var s = "[ ";
    while (node != null) {
      if (node.next == null) break;
      s += node.val + ", ";
      node = node.next;
    }
    s += node.val + " ]";
    return s;
  }

  // returns average value of all the nodes
  average() {
    var node = this.head;
    var length = 0,
      sum = 0;
    while (node != null) {
      length++;
      sum += node.val;
      node = node.next;
    }
    return sum / length;
  }
}

class node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

var list = new LinkedList();
list
  .add(3)
  .add(55)
  .add(300);
console.log(list.average());
// output: 119.33333333333333
