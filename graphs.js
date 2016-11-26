/*given a / b = 2.0, b / c = 3.0. 
queries are: a / c = ?, b / a = ?, a / e = ?, a / a = ?, x / x = ? . 
return [6.0, 0.5, -1.0, 1.0, -1.0 ].

According to the example above:
equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ].*/ 
var solution = function solution(equations, values, queries){
	var verts = [];
	var edges = [];
	// get a list of unique values out of equations
	var verts = equations.reduce((a,b) => {return a.concat(b)}, [])
		.filter((a, idx, arr) => {
			return arr.indexOf(a) === idx;
		});
	edges = equations.map((a, idx) => {
		var e = new Edge(a[0], a[1], Number(values[idx]));
		return e;
	});
	var tmp = equations.map((a, idx) => {
		var e = new Edge(a[1], a[0], 1/Number(values[idx]));
		return e;
	});
	edges = edges.concat(tmp);
	var g = new Graph(verts/*array of distinct vertices*/, edges);
	var ret = [];
	for(q in queries){
		var start = queries[q][0];
		var end = queries[q][1];
		if(verts.indexOf(end) != -1){
			g = BFS(g, start);
			ret.push(g.vertices[end].cost);
		}else{
			ret.push(Number.MAX_SAFE_INTEGER);
		}
	}
	console.log(ret);
/*	console.log(test.vertices['a']);
	console.log(test.vertices['b']);
	console.log(test.vertices['c']);*/
}

var Edge = function Edge(start, end, cost){
	this.start = start;
	this.end = end;
	this.cost = cost;
}

var Graph = function Graph(V, E){
	//E: [Edge{start:, end:, cost:}]
	//V: ['a','b','c', ...]
	this.vertices = {};
	V.map((a) => {
		this.vertices[a] = new Vertex(a);
	});
	E.map((a) => {
		this.vertices[a.start].adj.push(a);
	});
	
}

var Vertex = function Vertex(name){
	this.name = name;
	this.adj = [];
	this.cost = Number.MAX_SAFE_INTEGER;
	this.prev = null;
	this.visited = false;
}

var BFS = function BFS(graph, start){
	start = graph.vertices[start];

	start.visited = false;
	start.cost = 0;
	start.prev = null;
	var q = [];
	q.push(start);
	while(q.length > 0){
		var u = q.shift();
		u.adj.map((a, idx, arr) => {
				if(graph.vertices[a.end].visited === false){
					graph.vertices[a.end].visited = true;
					graph.vertices[a.end].cost = u.cost + a.cost;
					graph.vertices[a.end].prev = u;
					q.push(graph.vertices[a.end]);
				}
			}
		)
		u.visited = true;
	}
	return graph;
}

var equations = [ ["a", "b"], ["b", "c"] ];
var values = [2.0, 3.0];
var queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ];
var sol = solution(equations, values, queries);

