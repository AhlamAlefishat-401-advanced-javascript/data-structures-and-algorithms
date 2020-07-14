'use strict';

const { Graph, Vertex } = require('../breadthFirst /breadth-first');


function depthFirst(graph) {
  const visited = new Set();
  let stack = [];
  let result = [];
  let array = graph.getNodes();
  let startVertex = array[0];

  stack.push(startVertex);
  visited.add(startVertex);


  while (stack.length) {
    let current = stack.pop();
    result.push(current);
    let neighbors = graph.getNeighbors(current);
    for (let edge of neighbors) {
      let neighborVertex = edge.vertex;
      if (visited.has(neighborVertex)) {
        continue;
      } else {
        visited.add(neighborVertex);
      }
      stack.push(neighborVertex);
    }
  }
  return result;
}
const graph = new Graph();
let a = new Vertex('A');
let b = new Vertex('B');
let c = new Vertex('C');
let d = new Vertex('D');
let e = new Vertex('E');
let f = new Vertex('F');
let g = new Vertex('G');
let h = new Vertex('H');

graph.addNode(a);
graph.addNode(b);
graph.addNode(c);
graph.addNode(g);
graph.addNode(d);
graph.addNode(e);
graph.addNode(h);
graph.addNode(f);

graph.addEdge(a, b);
graph.addEdge(b, d);
graph.addEdge(b, c);
graph.addEdge(c, g);
graph.addEdge(d, f);
graph.addEdge(d, h);
graph.addEdge(d, e);
graph.addEdge(f, h);


console.log(depthFirst(graph));
