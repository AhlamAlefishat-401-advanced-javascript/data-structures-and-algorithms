# Graphs
   - A Graph is a non-linear data structure and consists of a finite set of vertices(or nodes) and set of Edges which connect a pair of nodes.
# Links
  - [Submission PR]()

# Challenge
  - Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:
    - AddNode()
       - Adds a new node to the graph
    - AddEdge()
       - Adds a new edge between two nodes in the graph
    - GetNodes()
       - Returns all of the nodes in the graph as a collection (set, list, or similar)
    - GetNeighbors()
       - Returns a collection of nodes connected to the given node
    - Size()
       - Returns the total number of nodes in the graph


# Approach & Efficiency
    - AddNode() -> Adds a vertex to the graph
    - AddEdge() -> Adds an edge to a vertex
    - GetNodes() -> Retruns a list of all vertexes
    - GetNeighbors(vertex) -> Returns all adjecent vertexes
    - Size() -> Gets the numbers of vertexes in the graph

# Big O
    - AddNode() -> O(1)
    - AddEdge() -> O(1)
    - GetNodes() -> O(n)
    - GetNeighbors() -> O(1)
    - Size() -> O(1)

# Solution
![](https://github.com/AhlamAlefishat-401-advanced-javascript/data-structures-and-algorithms/blob/master/assets/graph.jpg)