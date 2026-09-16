/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 * add to the end and remove from the beginning. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of queue. Returns undefined. */

  enqueue(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.size++;
  }

  /** dequeue(): remove first node and return its value.
   * Throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error("Queue is empty");
    }

    const removedNode = this.first;

    this.first = removedNode.next;
    this.size--;

    if (this.size === 0) {
      this.last = null;
    }

    return removedNode.val;
  }

  /** peek(): return value of first node. */

  peek() {
    if (this.size === 0) {
      return null;
    }

    return this.first.val;
  }

  /** isEmpty(): return true if queue is empty. */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Queue;