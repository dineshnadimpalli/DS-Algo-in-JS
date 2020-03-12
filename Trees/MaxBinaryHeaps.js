class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12]
    }

    insert(ele) {
        this.values.push(ele)
        this.bubbleUp()
    }

    bubbleUp() {
        let idx = this.values.length - 1
        const element = this.values[idx]
        while (idx>0) {
            let parentIdx = Math.floor((idx - 1) / 2)
            let parent = this.values[parentIdx]
            if (element <= parent)  break
            this.values[parentIdx] = element
            this.values[idx] = parent
            idx = parentIdx
        }
    }

    extractMax() {
        let max = this.values[0]
        let last = this.values.pop()
        if (this.values.length > 0) {
            this.values[0] = last
            this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let idx = 0
        let length = this.values.length
        let element = this.values[0]
        while (true) {
            let leftChildIdx = 2 * idx + 1
            let rightChildIdx = 2 * idx + 2
            let leftChild, rightChild
            let swap = null

            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx]
                if (leftChild > element) {
                    swap = leftChildIdx
                }
            }

            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx]
                if (
                    (swap === null && rightChild > element) ||
                    (swap!==null && rightChild>leftChild)
                ) {
                    swap = rightChildIdx
                }
            }

            if (swap === null) break
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }
}


let heap = new MaxBinaryHeap()

heap.insert(55)
heap.insert(45)
heap.insert(105)
console.log("-----------heap----------", heap)
heap.extractMax()
console.log("-----------heap----------", heap)
