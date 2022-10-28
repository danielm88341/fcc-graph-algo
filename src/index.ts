import Graph from "./model/graph";
import Vertex from "./model/vertex";
import Edge from "./model/edge";

console.log('What up')

let busNetwork = new Graph(true, true);
let stationFranklin = busNetwork.addVertex('Franklin');
let stationDowntown = busNetwork.addVertex('Downtown');
let stationShorton = busNetwork.addVertex('Shorton');
busNetwork.addEdge(stationFranklin, stationDowntown, 5);
busNetwork.addEdge(stationDowntown, stationShorton, 15);
busNetwork.addEdge(stationShorton,stationDowntown, 10);

busNetwork.print();
