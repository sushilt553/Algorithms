// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
    if (!root) return true;

    let heightDifference = Math.abs(height(root.left) - height(root.right)) <= 1;

    return heightDifference && isBalanced(root.left) && isBalanced(root.right);
}

function height(node) {
    if (!node) return -1;

    return 1 + Math.max(height(node.left), height(node.right));
}