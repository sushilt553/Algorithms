// function treeSum(root) {
//     if (!root) return 0;

//     let sum = 0;
//     let stack = [root];

//     while (stack.length) {
//         let node = stack.pop();
//         sum += node.val;
//         if (node.right) stack.push(node.right);
//         if (node.left) stack.push(node.left);
//     }

//     return sum;
// }

function treeSum(root) {
    if (!root) return 0;

    return root.val + treeSum(root.left) + treeSum(root.right);
}

module.exports = {
    treeSum
};