/*
 * LeetCode: Intuition
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

    const search = (nums, target, isSearchingLeft) => {
        let low = 0
        let high = nums.length - 1
        let idx = -1
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2)
            if (nums[mid] < target) {
                low = mid + 1
            } else if (nums[mid] > target) {
                high = mid - 1
            } else {
                idx = mid
                if (isSearchingLeft) {
                    high = mid - 1
                } else {
                    low = mid + 1
                }
            }
        }
        return idx

    }

    let left = search(nums, target, true)
    let right = search(nums, target, false)

    return [left, right]
};
