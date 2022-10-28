import Edge from "./edge";

export default class Vertex {
    data: string;
    edges: Edge[];

    constructor(inputData: string) {
        this.data = inputData;
        this.edges = [];
    }

    addEdge(endVertex: Vertex, weight: number | null): number {
        return this.edges.push(new Edge(this, endVertex, weight));
    }
    removeEdge(endVertex: Vertex): number {
        this.edges = this.edges.filter(value => {return value.end !== endVertex});
        return this.edges.length;
    }

    print(showWeight: boolean) {
        if(this.edges.length === 0) {
            console.log(this.data + '--> Empty');
            return;
        }

        let message = '';
        this.edges.forEach(value => {
            message += value.start.data + ' --> ' + value.end.data;
            if(showWeight) {
                message += ` (${value.weight})'`;
            }
            message += ', ';
        });
        console.log(message);
    }
}
