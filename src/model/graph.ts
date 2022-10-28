import Vertex from "./vertex";

export default class Graph {
    vertices: Vertex[];
    isWeighted: boolean;
    isDirected: boolean;

    constructor(weighted: boolean, directed: boolean) {
        this.isWeighted = weighted;
        this.isDirected = directed;
        this.vertices = [];
    }

    addVertex(data: string): Vertex {
        const vertex = new Vertex(data);
        this.vertices.push(vertex);
        return vertex;
    }
    removeVertex(vertex: Vertex) {
        this.vertices = this.vertices.filter(vert => {return vert !== vertex});
        this.vertices.forEach(vert => vert.removeEdge(vertex));
    }

    addEdge(vert1: Vertex, vert2: Vertex, weight: number | null) {
        if(!this.isWeighted) weight = null;
        vert1.addEdge(vert2, weight);
        if(!this.isDirected) vert2.addEdge(vert1, weight);
    }
    removeEdge(vert1: Vertex, vert2: Vertex) {
        vert1.removeEdge(vert2);
        if(!this.isDirected) vert2.removeEdge(vert1);
    }

    print() {
        this.vertices.forEach(vert => vert.print(this.isWeighted));
    }
}
