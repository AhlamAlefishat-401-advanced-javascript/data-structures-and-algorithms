'use strict';

const {Graph, Vertex} = require('../breadthFirst /breadth-first');


function getEdge (destinations, graph){

  let startingCity;
  let vertexCity = graph.getNodes();
  let cityValue = vertexCity.map(key => key.value);
  for(let city of destinations){
    if(!cityValue.includes(city)){
      throw new Error('Error: City does not exist in record');
    }
  }

  let total = 0;


  for(let city of vertexCity){
    if (city.value === destinations[0]){
      startingCity = city;
    }
  }

  for(let i = 1; i < destinations.length; i++){
    let neighbors = graph.getNeighbors(startingCity);
    for (let city of neighbors){
      if(city.vertex.value === destinations[i]){
        startingCity = city.vertex;
        total += city.weight;
      }
    }
  }
  return total;
}

const graph = new Graph();
let amman = new Vertex('Amman');
let aqaba = new Vertex('Aqaba');
let madaba = new Vertex('Madaba');
graph.addNode(amman);
graph.addNode(aqaba);
graph.addNode(madaba);
graph.addEdge(amman, aqaba, 332);
graph.addEdge(aqaba, madaba , 302);

let destinations = ['Amman', 'Aqaba','Madaba'];
let results = getEdge(destinations, graph);
console.log(results); 