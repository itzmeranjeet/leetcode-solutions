/*
 * LeetCode: Reverse Linked List
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/reverse-linked-list/
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  let curr = head
  let prev = null

  while(curr !== null){
    let next = curr.next
    curr.next = prev

    prev = curr
    curr = next
  }  
  return prev
};
