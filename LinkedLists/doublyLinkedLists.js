
class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}


class DoublyLinkedList {
    constructor(val) {
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
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if(!this.head)  return undefined
        let removedTail = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.tail = removedTail.prev
            this.tail.next = null
            removedTail.prev = null
        }
        this.length--
        return removedTail
    }

    shift() {
        if (!this.head) return undefined
        let oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
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
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let count, current
        if (index <= this.length / 2) {
            current = this.head
            count = 0
            while (count++ !== index) {
                current = current.next
            }
            return current
        } else {
            current = this.tail
            count = this.length - 1
            while (count-- !== index) {
                current = current.prev
            }
            return current
        }
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
        let nextNode = prevNode.next
        newNode.next = nextNode
        newNode.prev = prevNode
        prevNode.next = newNode
        nextNode.prev = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()
        let removedNode = this.get(index)
        removedNode.prev.next = removedNode.next
        removedNode.next.prev = removedNode.prev

        removedNode.next = null
        removedNode.prev = null
        this.length--
        return removedNode
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
            curr.prev = next
            prev = curr
            curr = next
        }
        return this
    }
}


let first = new DoublyLinkedList()
console.log(`--------Pushing started-------`)
// console.log(first.push(`Dinesh`))
// first.push(`Nadimapalli`)
// first.push(`You are awesome!`)
// first.push(`Testing you`)
first.push(5).push(10).push(15).push(20)
console.log(`---------Pushing done!--------`)
console.log(first.reverse())

console.log(first.head)
console.log(first.head.next.val)
console.log(first.head.next.next)
console.log(first.head.next.next.next.val)

// console.log(`\n--------Singly LinkedList is-------`)
// console.log(first)

// console.log(`\n------Traverse-------`)
// console.log(first.traverse())

// console.log(`\n------Pop------`)
// console.log(first.pop())
// console.log(first)

// console.log(`\n-----Shifting (remove from start)-----`)
// console.log(first.shift())
// console.log(first)
// console.log(first.shift())
// console.log(first)

// console.log(`\n-----UnShifting (adding at the start)-----`)
// console.log(first.unshift(`Hi, Dinesh!`))
// console.log(first)
// console.log(first.unshift(`How are you?`))
// console.log(first)


// console.log(first.get(3))


// console.log(first.set(2, 'Fuck you!'))

// console.log(first.get(2))

// console.log(first.insert(1, 'Hi again'))
// console.log(first.get(0))

// first.push(1)
// first.push(3)
// first.push(8)

// first.push(4)

// console.log(first)
// console.log(first.remove(2))
// console.log(first)
// console.log(first.pop())
// console.log(first)
// console.log(first.print())
// console.log(first.reverse())
// console.log(first.print())
