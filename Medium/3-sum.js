/*
 * LeetCode: 3Sum
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/3sum/description/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let res = []
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        let left = i + 1
        let right = nums.length - 1

        let initSum = -1 * nums[i]

        while (left < right) {
            let sum = nums[left] + nums[right]
            if (initSum == sum) {
                res.push([nums[i], nums[left], nums[right]])
                left++
                right--

                while (left < nums.length && nums[left] === nums[left - 1]) {
                    left++
                }
                while (right >= 0 && nums[right] === nums[right + 1]) {
                    right--
                }
            }
            else if (sum < initSum) {
                left++
            }
            else {
                right--
            }
        }
    }


    return res
};
