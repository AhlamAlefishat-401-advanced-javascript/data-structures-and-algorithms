'use strict';
const {Queue} = require('../stacksAndQueues/stacks-and-queues.js');
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
    this.adjacencyList = new Map();
  }

  addValue(value){
    this.addNode(new Vertex(value));
  }
  addNode(vertex){
    this.adjacencyList.set(vertex, []);
  }
  

  addEdge(startVertex, endVertex, weight = 0){
    if(!this.adjacencyList.has(startVertex) || !this.adjacencyList.has(endVertex)){
      throw new Error('ERROR: Invalid Vertices');
    }
  
    const adjacencies = this.adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex){
    if(!this.adjacencyList.has(vertex)){
      throw new Error('Error: Invalid vertex', vertex);
    }
  
    return [...this.adjacencyList.get(vertex)];
  }
  getValues(){
    let result = [];
    let nodes = [ ...this.adjacencyList.keys() ];
    nodes.map(key => {
      key = key.value;
      result.push(key);
    });
    return result;
  }

  getNodes(){
    let nodes = [ ...this.adjacencyList.keys() ];
    return nodes;
  }
 
  size(){
    return this.adjacencyList.size;
  }
  
  breadthFirst(firstNode){
    if (typeof firstNode !== 'object') return 'Invalid Node';
    if (this.size() === 0) return 'Graph is empty';
  
    let visitedNodes = new Set();
    let queue = new Queue();
    let results = [];
  
    queue.enqueue(firstNode);
    visitedNodes.add(firstNode);
  
    while(queue.length){
      let dequeue = queue.dequeue();
  
      results.push(dequeue);
      visitedNodes.add(dequeue);
  
      const neighbors = this.getNeighbors(dequeue);
  
      for(let k of neighbors){
        let neighbor = k.vertex;
  
        if(visitedNodes.has(neighbor)){
          continue;
        }else{
          visitedNodes.add(neighbor);
        }
  
        queue.enqueue(neighbor);
      }
    }
    return results;
  }

  
}
// const graph = new Graph();
// let vertex1 = new Vertex('Pandora');
// let vertex2 = new Vertex('Arendelle');
// let vertex3 = new Vertex('Metroville');
// let vertex4 = new Vertex('Monstroplolis');
// let vertex5 = new Vertex('Narnia');
// let vertex6 = new Vertex('Naboo');

// graph.addNode(vertex1);
// graph.addNode(vertex2);
// graph.addNode(vertex3);
// graph.addNode(vertex4);
// graph.addNode(vertex5);
// graph.addNode(vertex6);

// graph.addEdge(vertex1, vertex2);
// graph.addEdge(vertex2, vertex3);
// graph.addEdge(vertex2, vertex4);
// graph.addEdge(vertex3, vertex4);
// graph.addEdge(vertex3, vertex5);
// graph.addEdge(vertex3, vertex6);
// graph.addEdge(vertex4, vertex6);
// graph.addEdge(vertex5, vertex6);

// let result = graph.getNodes();
// console.log(result);
// console.log(graph.size());
// console.log(graph);

module.exports = {Vertex, Edge, Graph};