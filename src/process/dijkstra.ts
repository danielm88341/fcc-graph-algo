import Graph from "../model/graph";
import Vertex from "../model/vertex";

export class Dijkstra {
    constructor(graph: Graph, start: Vertex) {
        this.distances = new Map<string, number>()
        this.previous = new Map<string, Vertex>();
    }
    distances : Map<string, number>;
    previous: Map<string, Vertex>;
}
