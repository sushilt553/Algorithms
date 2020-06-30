// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');


function buildTree(preorder, inorder) {

    let root = preorder[0];
    let rootNode = new TreeNode(root);
    let rootIdx = inorder.indexOf(root);

    let inorderLeft = inorder.slice(0, rootIdx);
    let inorderRight = inorder.slice(rootIdx + 1);

    let preorderLeft = preorder.slice(1);
    let preorderRight = preorder.slice(1 + inorderLeft.length)

    rootNode.left = buildTree(preorderLeft, inorderLeft);
    rootNode.right = buildTree(preorderRight, inorderRight);

    return rootNode;
}
