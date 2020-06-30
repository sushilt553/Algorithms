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

