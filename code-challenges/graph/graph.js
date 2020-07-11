'use strict';
class Vertex {
  constructor(value){
    this.value = value;
  }
}
class Edge {
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight || 0;
  }
}

class Graph {
  constructor(){
    this._adjancyList = new Map();
  }

  addNode(vertex){
    this._adjancyList.set(vertex, []);
  }
  addEdge(startVertex, endVertex, weight) {
    if (
      !this._adjancyList.has(startVertex) ||
      !this._adjancyList.has(endVertex)
    ) {
      console.log('Vertex not found');
    } else {
      const adjacencies = this._adjancyList.get(startVertex);
      adjacencies.push(new Edge(endVertex, weight));
    }
  }
  getNodes(){
    let nodes = [ ...this._adjancyList.keys() ];
    return nodes;
  }
  getNeighbors(vertex) {
    if (this._adjancyList.has(vertex)) {
      return this._adjancyList.get(vertex);
    }
  }
  size(){
    return this._adjancyList.size;
  }
  printAll() {
    for (const [vertex, edge] of this._adjancyList.entries()) {
      console.log('V>> ', vertex);
      console.log('E>>', edge);
    }
  }
}

const graph = new Graph();
const ten = new Vertex(10);
const two = new Vertex(2);
const six = new Vertex(6);
const seven = new Vertex(7);
const three = new Vertex(3);
const eight = new Vertex(8);
graph.addNode(ten);
graph.addNode(two);
graph.addNode(six);
graph.addNode(seven);
graph.addNode(three);
graph.addNode(eight);
graph.addEdge(ten, two);
graph.addEdge(ten, six);
graph.addEdge(ten, three);
graph.addEdge(ten, seven);
graph.addEdge(two, seven);
graph.addEdge(six, seven);
graph.addEdge(six, eight);
graph.addEdge(three, seven);
graph.addEdge(eight, three);
console.log(graph);
graph.printAll();
console.log('NEIGHBORS', graph.getNeighbors(ten));
console.log('size:', graph.size());
console.log('getnode:', graph.getNodes());

module.exports = {Vertex, Edge, Graph};

