/*
 * LeetCode: Find Minimum in Rotated Sorted Array
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let low = 0
    let high = nums.length - 1
    let res = -1
    while (low < high) {
        let mid = low + Math.floor((high - low) / 2)
        if (nums[high] < nums[mid]) {
            low = mid + 1
        } else {
            high = mid 
        }
    }
    return nums[low]
};
