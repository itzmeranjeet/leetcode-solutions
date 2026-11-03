/*
 * LeetCode: Symmetric Tree
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/symmetric-tree/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isSymmetric = function (root) {
    // An empty tree is symmetric
    if (root === null) {
        return true;
    }

    function isMirror(left, right) {
        // Case 1: Both nodes are empty
        if (left === null && right === null) {
            return true;
        }

        // Case 2: Only one node is empty
        if (left === null || right === null) {
            return false;
        }

        // Case 3: Values differ
        if (left.val !== right.val) {
            return false;
        }

        // Compare mirrored children
        return (
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    }

    return isMirror(root.left, root.right);
};
