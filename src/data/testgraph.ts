import Graph from "../model/graph";

export function getTestGraph(weighted: boolean, directed: boolean): Graph {
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