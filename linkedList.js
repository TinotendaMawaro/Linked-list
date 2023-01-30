class LinkedList {
  constructor (head = null) {
    this.head = head
  }

  append (value) {
    if (this.head) {
      let currentNode = this.head

      while (currentNode.nextNode) {
        currentNode = currentNode.nextNode
      }
      currentNode.nextNode = new Node(value)
    } else {
      this.head = new Node(value)
    }
  }

  prepend (value) {
    if (this.head) {
      const currentHead = this.head
      this.head = new Node(value)
      this.head.nextNode = currentHead
    } else {
      this.head = new Node(value)
    }
  }

  size () {
    if (this.head) {
      let count = 1
      let currentNode = this.head

      while (currentNode.nextNode) {
        count++
        currentNode = currentNode.nextNode
      }

      return count
    } else {
      return 0
    }
  }

  headNode () {
    return this.head
  }

  tailNode () {
    let currentNode = this.head

    while (currentNode.nextNode) {
      currentNode = currentNode.nextNode
    }

    return currentNode
  }

  at (index) {
    if (index < 0 || isNaN(index)) {
      return 'Please enter a correct index'
    } else {
      let currentNode = this.head

      for (let i = 0; i < index; i++) {
        if (currentNode === null) {
          return 'There are no node at the given index'
        } else {
          currentNode = currentNode.nextNode
        }
      }

      return currentNode
    }
  }

  pop () {
    if (this.head) {
      let currentNode = this.head
      while (currentNode.nextNode.nextNode) {
        currentNode = currentNode.nextNode
      }
      currentNode.nextNode = null

      return currentNode
    }
  }

  contains (value) {
    let currentNode = this.head

    while (currentNode.nextNode) {
      if (currentNode.value === value) {
        return true
      } else {
        currentNode = currentNode.nextNode
        if (currentNode.value === value) {
          return true
        }
      }
    }
    return false
  }

  find (value) {
    let currentNode = this.head
    let count = 0

    while (currentNode.nextNode) {
      if (currentNode.value === value) {
        return count
      } else {
        count++
        currentNode = currentNode.nextNode
        if (currentNode.value === value) {
          return count
        }
      }
    }
    return null
  }

  toString () {
    let string = ''
    let currentNode = this.head

    if (currentNode) {
      string += `(${currentNode.value})`
    }

    currentNode = currentNode.nextNode

    while (currentNode) {
      string += `->(${currentNode.value})`
      currentNode = currentNode.nextNode
    }
    string += '->(null)'
    return string
  }

  /**
   * Insert a new node at spesific index with given value.
   *
   * @param   value  any value.
   * @param   index  Index start from 0 (head).
   */
  insertAt (value, index) {
    if (index < 0) {
      return 'please enter a valid index'
    } else if (index === 0) {
      this.prepend(value)
      return
    }

    let currentHead = this.head
    let currentNode = this.head

    for (let i = 0; i < index; i++) {
      if (currentNode === null) {
        return console.error(`Error: index given are outside the linked list range (${i})`)
      }
      currentHead = currentNode
      currentNode = currentNode.nextNode
    }
    const newTail = currentNode
    currentHead.nextNode = new Node(value)
    currentHead.nextNode.nextNode = newTail
  }

  /**
   * remove a node at spesific index
   *
   * @param   index  Index start from 0 (head).
   */
  removeAt (index) {
    if (index < 0) {
      return 'please enter a valid index'
    } else if (index === 0) {
      const firstNextNode = this.head.nextNode
      this.head = firstNextNode
      return
    }

    let currentNode = this.head
    let prevNode

    for (let i = 0; i < index; i++) {
      if (currentNode === null || currentNode.nextNode === null) {
        return console.error(`Error: index given are outside the linked list range (${i})`)
      }
      prevNode = currentNode
      currentNode = currentNode.nextNode
    }
    prevNode.nextNode = currentNode.nextNode
  }
}

class Node {
  constructor (value = null) {
    this.value = value
    this.nextNode = null
  }
}

const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)

node1.nextNode = node2
node2.nextNode = node3

const link = new LinkedList(node1)

console.log(link.toString())
console.log(link.size())
console.log(link.headNode())
console.log(link.tailNode())

link.append(4)
link.prepend(0)
console.log(link.toString())
console.log(link.size())
console.log(link.headNode())
console.log(link.tailNode())

link.pop()
console.log(link.toString())
console.log(link.contains(1))
console.log(link.contains(999))
link.insertAt(999, 3)
console.log(link.contains(999))
console.log(link.toString())

link.removeAt(0)
console.log(link.toString())
link.removeAt(2)
console.log(link.toString())