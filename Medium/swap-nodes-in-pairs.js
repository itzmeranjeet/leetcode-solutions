/*
 * LeetCode: Swap Nodes in Pairs
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/swap-nodes-in-pairs/
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
var swapPairs = function(head) {
    if(head === null || head.next ===null){
        return head
    }
  let first = head
  let second = head.next
  let prev = null

  while(first !== null && second !== null){
    let third = second.next
    second.next = first
    first.next = third

    if(prev !== null){
        prev.next = second
    }else{
        head = second
    }

    prev = first
    first = third

    if(third !== null){
        second = third.next
    }else{
        second = null
    }
  }

  return head
};
