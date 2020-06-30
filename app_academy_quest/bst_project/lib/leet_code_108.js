// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

const { TreeNode } = require("../../tree_order_project/lib/tree_node");


function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;
    
    let rootIdx = Math.floor(nums.length / 2);
    let rootNode = new TreeNode(nums[rootIdx]);

    rootNode.left = sortedArrayToBST(nums.slice(0, rootIdx));
    rootNode.right = sortedArrayToBST(nums.slice(rootIdx + 1));

    return rootNode;
}
