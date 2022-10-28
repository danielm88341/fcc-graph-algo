import Vertex from "./vertex";

export default class Edge {

    weight: number | null;
    start: Vertex;
    end: Vertex;

    constructor(start: Vertex, end: Vertex, weight: number | null) {
        this.start = start;
        this.end = end;
        this.weight = weight;
    }


}
