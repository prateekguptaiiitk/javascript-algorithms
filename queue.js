class QueueNode {
  constructor(value, next=null) {
    this.value = value
    this.next = next
  }
}

class Queue {
  constructor() {
    this.head = null
    this.tail = null
  }

  isEmpty() {
    return !this.head;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }

    return this.head.value;
  }

  enqueue(value) {
    const newNode = new QueueNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;

      return this;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }

  dequeue() {
  	 if (!this.head) {
      return null;
    }

    const deletedHead = this.head;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = null;
      this.tail = null;
    }

    return deletedHead ? deletedHead.value : null;
  }

   toArray() {
    const nodes = [];

    let currentNode = this.head;
    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }

    return nodes.map((node) => node.value);
  }

  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }
}

function main() {
  const queue = new Queue()
  queue.enqueue(9)
  queue.enqueue(10)
  queue.enqueue(11)
  console.log(queue.toString())
}

main()