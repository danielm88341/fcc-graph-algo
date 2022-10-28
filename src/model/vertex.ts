import Edge from "./edge";

export default class Vertex {
    data: string;
    edges: Edge[];

    constructor(inputData: string) {
        this.data = inputData;
        this.edges = [];
    }
}
