/*
 * LeetCode: BFS + twoSum and a boolean output
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
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
 * @param {number} k
 * @return {boolean}
 */

var findTarget = function(root, k) {
    const leftStack = [];
    const rightStack = [];

    let left = root;
    let right = root;

    function nextSmallest() {
        while (left) {
            leftStack.push(left);
            left = left.left;
        }

        if (leftStack.length === 0) return null;

        const node = leftStack.pop();
        left = node.right;

        return node;
    }

    function nextLargest() {
        while (right) {
            rightStack.push(right);
            right = right.right;
        }

        if (rightStack.length === 0) return null;

        const node = rightStack.pop();
        right = node.left;

        return node;
    }

    let l = nextSmallest();
    let r = nextLargest();

    while (l && r && l !== r) {
        const sum = l.val + r.val;

        if (sum === k) return true;

        if (sum < k) {
            l = nextSmallest();
        } else {
            r = nextLargest();
        }
    }

    return false;
};
