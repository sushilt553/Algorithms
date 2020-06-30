class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

function dfs(node, visited = new Set()) {
    if (visited.has(node.val)) return;

    console.log(node.val);
    visited.add(node.val)
    node.neighbors.forEach((n) => {
        dfs(n, visited);
    })
}

function dfs(node) {
    let visited = new Set();

    let stack = [node];

    while (stack.length) {
        let n = stack.pop();
        if (visited.has(n.val)) continue;

        visited.add(n.val);
        console.log(n.val);
        stack.push(...n.neighbors);
    }
}

let graph = {
    'a': ['b', 'c', 'e'],
    'b': [],
    'c': ['b', 'd'],
    'd': [],
    'e': ['a'],
    'f': ['e']
};

function dfs(node, graph, visited = new Set()) {
    if (visited.has(node)) return;

    console.log(node)
    visited.add(node);

    graph[node].forEach((n) => {
        dfs(n, graph, visited)
    })
}

function dfs(node, graph) {
    let visited = new Set();

    let stack = [node];

    while (stack.length) {
        let n = stack.pop();
        if (visited.has(n)) continue;
        console.log(n);
        visited.add(n);

        stack.push(...graph[node]);
    }
}

