class StackNode {
  constructor(value, next=null) {
    this.value = value
    this.next = next
  }
}

class Stack {
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

  push(value) {
    const newNode = new StackNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }
  }

  pop() {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head

    if (this.head.next) {
      this.head = this.head.next

    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead ? deletedHead.value : null;
  }

  toArray() {
    const nodes = []

    let currentNode = this.head
    while (currentNode) {
      nodes.push(currentNode.value)
      currentNode = currentNode.next
    }

    return nodes
  }

  toString(callback) {
    return this.toArray().map((node) => node.toString(callback)).toString();
  }
}

function main() {
  const stack = new Stack()
  stack.push(9)
  stack.push(10)
  stack.push(11)
  console.log(stack.toString())
}

main()