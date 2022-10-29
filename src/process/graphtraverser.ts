import Vertex from "../model/vertex";

export function depthFirstTraversal(start: Vertex, visited: Vertex[]) {
    console.log(`${start.data}`);

    start.edges.forEach(edge => {
        let neighbor = edge.end;

        if(visited.indexOf(neighbor) === -1) {
            visited.push(neighbor);
            depthFirstTraversal(neighbor, visited);
        }
    })
}