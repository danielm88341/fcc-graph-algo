import Graph from "../model/graph";

export function getTestStarterGraph(weighted: boolean, directed: boolean): Graph {
    const testGraph = new Graph(weighted, directed);
    const startNode = testGraph.addVertex('v0.0.0');
    const v1 = testGraph.addVertex('v1.0.0');
    const v2 = testGraph.addVertex('v2.0.0');

    const v11 = testGraph.addVertex('v1.1.0');
    const v12 = testGraph.addVertex('v1.2.0');
    const v21 = testGraph.addVertex('v2.1.0');

    const v111 = testGraph.addVertex('v1.1.1');
    const v112 = testGraph.addVertex('v1.1.2');
    const v121 = testGraph.addVertex('v1.2.1');
    const v211 = testGraph.addVertex('v2.1.1');

    testGraph.addEdge(startNode, v1, null);
    testGraph.addEdge(startNode, v2, null);
    testGraph.addEdge(v1, v11, null);
    testGraph.addEdge(v1, v12, null);
    testGraph.addEdge(v2, v21, null);
    testGraph.addEdge(v11, v111, null);
    testGraph.addEdge(v11, v112, null);
    testGraph.addEdge(v12, v121, null);
    testGraph.addEdge(v21, v211, null);

    // create a circle
    testGraph.addEdge(v211, v2, null);

    return testGraph;
}

export function getTestDijkstraGraph(): Graph {
    const graph = new Graph(true, true);
    let a = graph.addVertex('A');
    let b = graph.addVertex('B');
    let c = graph.addVertex('C');
    let d = graph.addVertex('D');
    let e = graph.addVertex('E');
    let f = graph.addVertex('F');
    let g = graph.addVertex('G');

    graph.addEdge(a,c,100);
    graph.addEdge(a,b, 3);
    graph.addEdge(a,d,4);
    graph.addEdge(d,c,3);
    graph.addEdge(d,e,8);
    graph.addEdge(e,b,-2);
    graph.addEdge(e,f, 10);
    graph.addEdge(b,g, 9);
    graph.addEdge(e,g, -50);

    return graph;
}