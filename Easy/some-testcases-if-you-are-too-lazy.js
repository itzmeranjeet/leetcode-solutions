/*
 * LeetCode: Some Testcases if you are too lazy
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/longest-palindrome/submissions/2104468787/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let result = 0
    let map = new Map()
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1)
    }
    let odd = false
    for (let [key, val] of map) {

        if (val % 2 === 0) {
            result += val
            console.log(result)
        }
        else {
            odd = true
        }
    }
    if (!odd) {
        return result
    }

    for (let [key, val] of map) {
        if (val % 2 === 1) {
            result += val - 1
        }
    }

    return result + 1
};
