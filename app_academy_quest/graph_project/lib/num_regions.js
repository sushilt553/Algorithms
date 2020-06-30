function numRegions(graph) {
    let visited = new Set();
    let count = 0;

    for (let node in graph) {
        if (dfs(node, visited, graph)) count++;
    }
    return count;
}

function dfs(source, visited, graph) {
    if (visited.has(source)) return false;

    let stack = [source];
    while (stack.length) {
        let node = stack.pop();
        if (visited.has(node)) continue;
        visited.add(node);

        stack.push(...graph[node]);
    }
    return true;
}

module.exports = {
    numRegions
};