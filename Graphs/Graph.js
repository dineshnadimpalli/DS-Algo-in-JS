
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v=> v!==v1)
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length > 0) {
            const adjacencyVertex = this.adjacencyList[vertex].pop()
            this.removeEdge(vertex, adjacencyVertex)
        }
        delete this.adjacencyList[vertex]
    }
}


let gr = new Graph()

gr.addVertex('Tokyo')
gr.addVertex('Hyd')
gr.addVertex('Bangalore')


gr.addEdge('Tokyo', 'Hyd')
// gr.removeEdge('Tokyo', 'Hyd')

gr.removeVertex('Tokyo')

console.log("-------gr--------", gr)