


class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// let first = new Node(`dinesh`)
// first.next = new Node(`Nadimpalli`)
// first.next.next = new Node(`Varma`)

class SinglyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    // pop() {
    //     if(!this.head)  return undefined
    //     let current = this.head
    //     let newTail = current
    //     while (current.next) {
    //         newTail = current
    //         current = current.next
    //     }
    //     this.tail = newTail
    //     this.tail.next = null
    //     this.length--
    //     if (this.length === 0) {
    //         this.head = null
    //         this.tail = null
    //     }
    //     return current
    // }

    pop() {
        if(!this.head)  return undefined
        let current = this.head
        let newTail = null
        while (current.next) {
            newTail = current
            current = current.next
        }
        this.tail = newTail
        if (this.tail) {
            this.tail.next = null
        } else {
            this.head = null
        }
        this.length--
        return current
    }

    shift() {
        if (!this.head) return undefined
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode
            this.tail = this.head
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) {
            return null
        }
        let count = 0
        let current = this.head
        while (count++ !== index) {
            current = current.next
        }
        return current
    }

    set(index, newValue) {
        let node = this.get(index)
        if (node) {
            node.val = newValue
            return true
        }
        return false
    }

    insert(index, newValue) {
        if (index < 0 || index >= this.length) return false
        if (index === 0) {
            return !!this.unshift(newValue)
        }
        if (index === this.length) {
            return !!this.push(newValue)
        }
        let newNode = new Node(newValue)
        let prevNode = this.get(index - 1)
        let nextNode = this.get(index)
        newNode.next = nextNode
        prevNode.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let prevNode = this.get(index - 1)
        let removedNode = prevNode.next
        prevNode.next = removedNode.next
        removedNode.next = null
        this.length--
        return removedNode
    }

    traverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next
        }
    }

    reverse() {
        let curr = this.head
        this.head = this.tail
        this.tail = curr
        let prev = null
        let next = null
        while (curr) {
            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        return this
    }

    print() {
        let node = this.head
        let a = []
        while (node) {
            a.push(node.val)
            node = node.next
        }
        return a
    }
}

let first = new SinglyLinkedList()
console.log(`--------Pushing started-------`)
first.push(`Dinesh`)
first.push(`Nadimapalli`)
first.push(`You are awesome!`)
first.push(`Testing you`)
console.log(`---------Pushing done!--------`)

// console.log(`\n--------Singly LinkedList is-------`)
// console.log(first)

// console.log(`\n------Traverse-------`)
// console.log(first.traverse())

// console.log(`\n------Pop------`)
// console.log(first.pop())
// console.log(first)

console.log(`\n-----Shifting (remove from start)-----`)
console.log(first.shift())
console.log(first)
console.log(first.shift())
console.log(first)

// console.log(`\n-----UnShifting (adding at the start)-----`)
// console.log(first.unshift(`Hi, Dinesh!`))
// console.log(first.unshift(`How are you?`))
// console.log(first)


// console.log(first.get(2))


// console.log(first.set(2, 'Fuck you!'))

// console.log(first.get(2))

// console.log(first.insert(3, 'Hi again'))
// console.log(first.get(3))

// first.push(1)
// first.push(3)
// first.push(8)
// first.push(4)

// console.log(first)
// console.log(first.remove(2))
// console.log(first)

// console.log(first.print())
// console.log(first.reverse())
// console.log(first.print())


