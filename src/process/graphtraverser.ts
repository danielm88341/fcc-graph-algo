import Vertex from "../model/vertex";
import * as process from "process";

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

export function breadthFirstTransversal(start: Vertex, visited: Vertex[]) {
    // console.log(`${start.data}`);

    let processQueue: Vertex[] = [];
    processQueue.push(start);

    while(processQueue.length > 0) {
        let curr = processQueue.shift();
        if(!curr) return;   // run type safety check. also breaks flow if empty
        console.log(curr.data);

        curr.edges.forEach(edge => {
            const end = edge.end;
            if(visited.indexOf(end) < 0) {
                visited.push(end);
                processQueue.push(end);
            }
        });
    }

    // start.edges.forEach(edge => {
    //     if(!visited.find(visited => {return visited ===edge.end})) {
    //         visited.push(edge.end);
    //         processQueue.push(edge.end);
    //     }
    // });

    // processQueue.forEach(queued => {
    //     breadthFirstTransversal(queued, visited);
    // })
}
