import Graph from "./model/graph";
import {getTestStarterGraph} from "./data/testgraph";
import Vertex from "./model/vertex";
import {breadthFirstTransversal, depthFirstTraversal} from "./process/graphtraverser";

// console.log('POC Graphline');
// const busNetwork = new Graph(true, true);
// const stationFranklin = busNetwork.addVertex('Franklin');
// const stationDowntown = busNetwork.addVertex('Downtown');
// const stationShorton = busNetwork.addVertex('Shorton');
// busNetwork.addEdge(stationFranklin, stationDowntown, 5);
// busNetwork.addEdge(stationDowntown, stationShorton, 15);
// busNetwork.addEdge(stationShorton,stationDowntown, 10);
// busNetwork.print();

const testGraph = getTestStarterGraph(false, true);
const start = testGraph.getStartingVertex(0);
let vertices: Vertex[] = [];
console.log('Depth First ====================');
depthFirstTraversal(start, vertices);
console.log('Breadth First ==================');
breadthFirstTransversal(start, []);





