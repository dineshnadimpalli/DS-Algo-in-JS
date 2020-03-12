
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

    bfs(start) {
        const visited = {}
        const result = []
        const queue = [start]
        visited[start] = true
        let currVertex

        while (queue.length > 0) {
            currVertex = queue.shift()
            result.push(currVertex)
            this.adjacencyList[currVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true
                    queue.push(neighbour)
                }
            });
        }

        return result
    }
}


let gr = new Graph()

gr.addVertex('A')
gr.addVertex('B')
gr.addVertex('C')
gr.addVertex('D')
gr.addVertex('E')
gr.addVertex('F')


gr.addEdge('A', 'B')
gr.addEdge('A', 'C')
gr.addEdge('B', 'D')
gr.addEdge('C', 'E')
gr.addEdge('D', 'E')
gr.addEdge('D', 'F')
gr.addEdge('E', 'F')


console.log(gr.bfs('A'))


console.log("-------gr--------", gr)


//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F