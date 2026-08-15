/*
 * LeetCode: Remove Duplicates from Sorted Array II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let res = 2
    for(let i=0; i<nums.length; i++){
        if(nums[i] !== nums[res - 2]){
            nums[res] = nums[i]
            res++
        }
    }
    return res
};
