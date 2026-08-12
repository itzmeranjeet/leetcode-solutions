/*
 * LeetCode: Add Two Numbers
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/add-two-numbers/description/
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0
    let dummy = new ListNode()
    let res = dummy

    while (l1 || l2 || carry > 0) {
        let value = (l1?.val ?? 0) + (l2?.val ?? 0) + carry
        carry = Math.floor(value / 10)
        value %= 10

        res.next = new ListNode(value)
        res = res.next

        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    return dummy.next
};
