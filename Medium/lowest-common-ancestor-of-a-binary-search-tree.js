/*
 * LeetCode: Lowest Common Ancestor of a Binary Search Tree
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // Base case
    if (root === null) {
        return null;
    }

    // Case 1: Root is equal to p or q
    if (root.val === p.val || root.val === q.val) {
        return root;
    }

    // Case 2: Both nodes are greater than root
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }

    // Case 3: Both nodes are smaller than root
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }

    // Case 4: Root lies between p and q
    return root;
};



How the code works:
1. Check whether root is null.
2. Check whether root equals either target.
3. If both targets are greater, recursively search right.
4. If both targets are smaller, recursively search left.
5. Otherwise, current root is the LCA.
6. Iterative Approach (Without Recursion)
We can solve the same problem using a simple while loop.

var lowestCommonAncestor = function(root, p, q) {

    while (root !== null) {

        if (root.val < p.val && root.val < q.val) {
            root = root.right;
        }

        else if (root.val > p.val && root.val > q.val) {
            root = root.left;
        }

        else {
            return root;
        }
    }

    return null;
};
