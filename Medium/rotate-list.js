/*
 * LeetCode: Rotate List
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/rotate-list/submissions/2113063664/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (head === null) {
        return null
    }

    let n = 1
    let last = head

    while (last.next !== null) {
        n++
        last = last.next
    }

    k = k % n
    if (k === 0) {
        return head
    }

    let count = 1
    let t = head

    while(count < n-k){
        count++
        t = t.next
    }
    last.next = head

    let result = t.next

    t.next = null

    return result
};
