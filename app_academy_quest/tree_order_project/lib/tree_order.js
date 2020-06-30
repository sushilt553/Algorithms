function inOrderArray(root) {
    if (!root) return [];

    return inOrderArray(root.left).concat([root.val], inOrderArray(root.right));
}

function postOrderArray(root) {
    if (!root) return [];

    return postOrderArray(root.left).concat(postOrderArray(root.right), [root.val]);
}


module.exports = {
    inOrderArray,
    postOrderArray
};