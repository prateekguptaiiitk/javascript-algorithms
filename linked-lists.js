class LinkedListNode {
  constructor(value, next=null) {
    this.value = value
    this.next = next
  }
}


class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
  }

  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  append(value) {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  insert(value, rawIndex) {
    const index = rawIndex < 0 ? 0 : rawIndex

    if (index === 0) {
      this.prepend(value)
    
    } else {
      let count = 1
      let currentNode = this.head
      const newNode = new LinkedListNode(value)
      while (currentNode) {
        if (count === index) break
        currentNode = currentNode.next
        count += 1
      }

      if (currentNode) {
        newNode.next = currentNode.next
        currentNode.next = newNode

      } else {
        if (this.tail) {
          this.tail.next = newNode
          this.tail = newNode

        } else {
          this.head = newNode
          this.tail = newNode
        }
      }
    }
    return this
  }

  delete(value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    while (this.head && (this.head.value === value)) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    if (currentNode !== null) {
      while (currentNode.next) {
        if (currentNode.next.value === value) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next

        } else {
          currentNode = currentNode.next
        } 
      }
    }

    if (this.tail.value === value) {
      this.tail = currentNode
    }

    return deletedNode
  }

  find({ value = undefined, callback = undefined}) {
    if (!this.head) {
      return null
    }

    let currentNode = this.head

    while (currentNode) {
      if (callback && callback(currentNode.value)) {
        return currentNode
      }

      if (value !== undefined && (currentNode.value === value)) {
        return currentNode
      }

      currentNode = currentNode.next
    }

    return null
  }

  deleteTail() {
    const deletedTail = this.deleteTail
    
    if (this.head === this.tail) {
      this.head = null
      this.tail = null

      return deletedTail
    }

    let currentNode = this.head
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null

      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode

    return deletedTail
  }

  deleteHead() {
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

    return deletedHead
  }

  fromArray(values) {
    values.forEach((value) => this.append(value))

    return this
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
    return this.toArray().map(node => node.toString(callback)).toString()
  }

  reverse() {
    let currNode = this.head
    let prevNode = null
    let nextNode = null

    while (currNode) {
      nextNode = currNode.next

      currNode.next = prevNode

      prevNode = currNode
      currNode = nextNode
    }

    this.tail = this.head
    this.head = prevNode

    return this
  }
}

function main() {
  const linkedList = new LinkedList()
  linkedList.append(9)
  linkedList.append(10)
  linkedList.append(11)
  linkedList.reverse()
  console.log(linkedList.toString())
  linkedList.reverse()
  console.log(linkedList.toString())
  console.log(linkedList.find({value: 10}))

  const linkedList2 = new LinkedList();

    linkedList2
      .append({ value: 1, key: 'test1' })
      .append({ value: 2, key: 'test2' })
      .append({ value: 3, key: 'test3' });

    const node = linkedList2.find({ callback: (value) => value.key === 'test2' });
    console.log(node)
}

main()