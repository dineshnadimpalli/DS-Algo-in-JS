class Node{
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}


class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(val) {
        let newNode = new Node(val)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (val === current.val) {
                return undefined
            } else if (val < current.val) {
                if (!current.left) {
                    current.left = newNode
                    return this
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = newNode
                    return this
                }
                current = current.right
            } 
        }
    }

    find(val) {
        if (!this.root) return undefined
        let current = this.root
        let found = false
        while (current && !found) {
            if (val < current.val)      current = current.left
            else if (val > current.val)     current = current.right
            else    found = true
        }
        return found ? current : null
    }

    BFS() {
        let queue = []
        let data = []
        let node = this.root
        queue.push(node)
        while (queue.length > 0) {
            node = queue.shift()
            data.push(node.val)
            if (node.left)  queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }

    DFSPreOrder() {
        let data = []
        let current = this.root
        function traverse(node) {
            data.push(node.val)
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }

    DFSInOrder() {
        let data = []
        let current = this.root
        function traverse(node) {
            if (node.left) traverse(node.left)
            data.push(node.val)
            if (node.right) traverse(node.right)
        }
        traverse(current)
        return data
    }

    DFSPostOrder() {
        let data = []
        let current = this.root
        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.val)
        }
        traverse(current)
        return data
    }
}

let tree = new BinarySearchTree()
let arr = [10, 6, 15, 3, 8, 20]
arr.map(num=>tree.insert(num))
// tree.insert(5)
// tree.insert(10)
// tree.insert(2)
// tree.insert(12)
// tree.insert(1)
// console.log(tree.find(5))


console.log(tree)
console.log(tree.BFS())

console.log(tree.DFSPreOrder())

console.log(tree.DFSInOrder())

console.log(tree.DFSPostOrder())



