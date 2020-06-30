function breadthFirstSearch(startingNode, targetVal) {
    let visited = new Set();

    let queue = [startingNode];

    while (queue.length) {
        let node = queue.shift();
        if (visited.has(node.val)) continue;
        visited.add(node.val)
        if (node.val === targetVal) return node;

        queue.push(...node.neighbors);
    }
    return null;
}

module.exports = {
    breadthFirstSearch
};