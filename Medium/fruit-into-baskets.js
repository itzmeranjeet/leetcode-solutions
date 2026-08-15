/*
 * LeetCode: Fruit Into Baskets
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/fruit-into-baskets/submissions/2108018824/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
    let obj = {}
    let low = 0
    let high = 0
    let max = -1

    while (high < fruits.length) {
        obj[fruits[high]] = (obj[fruits[high]] || 0) + 1

        while (Object.keys(obj).length > 2) {
            obj[fruits[low]] = obj[fruits[low]] - 1
            if (obj[fruits[low]] == 0) {
                delete obj[fruits[low]]
            }
            low++
        }

        if (Object.keys(obj).length <= 2) {
            let len = high - low + 1
            max = Math.max(max, len)
        }
        high++
    }

    return max
};
