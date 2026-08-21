/*
 * LeetCode: Find First and Last Position of Element in Sorted Array
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let first = -1
    let low = 0
    let high = nums.length - 1
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        if (nums[mid] === target) {
            first = mid
            high = mid - 1
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    low = 0
    high = nums.length - 1
    last = -1
    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)

        if (nums[mid] === target) {
            last = mid
            low = mid + 1
        } else if (nums[mid] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return [first, last]
};
