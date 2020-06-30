function maxValue(node) {
    let visited = new Set();

    let stack = [node];
    let maxValue = -Infinity;
    while (stack.length) {
        let node = stack.pop();
        if (visited.has(node.val)) continue;
        visited.add(node.val);
        if (node.val > maxValue) maxValue = node.val;

        stack.push(...node.neighbors);
    }

    return maxValue;
}

module.exports = {
    maxValue
};