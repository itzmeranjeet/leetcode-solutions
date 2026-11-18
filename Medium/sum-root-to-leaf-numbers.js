/*
 * LeetCode: Sum Root to Leaf Numbers
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/sum-root-to-leaf-numbers/
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
 * @return {number}
 */
var sumNumbers = function (root) {
    let total = 0
    function dfs(node, sum) {
        if (node === null) {
            return
        }

        sum = sum * 10 + node.val

        if (node.left === null && node.right === null) {
            total += sum
            return
        }

        dfs(node.left, sum)
        dfs(node.right, sum)
    }
    dfs(root, 0)
    return total
};
