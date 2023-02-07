function SolveGraph (graph, start, end, register = {}) {
  // Your code here:
  if(register[start]) return false;
  register[start] = true;
  for (let i =0; i < graph[start].length; i++) {
    if (graph[start][i] === end) return true;
    else if (SolveGraph(graph, graph[start][i], end, register)){
      // -------------> Booleano
      return true;
    }
  }
  return false;
}

const graph = {
  a: ["c"],
  b: ["c"],
  c: ["s", "r"],
  d: ["a"],
  s: ["a", "c"],
  r: ["d"],
  z: ["z"]
};

module.exports = SolveGraph
