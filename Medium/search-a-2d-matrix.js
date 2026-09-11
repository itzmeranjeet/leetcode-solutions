/*
 * LeetCode: Search a 2D Matrix
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/search-a-2d-matrix/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length
    let low = 0
    let high = rows * cols - 1

    while (low <= high) {
        let mid = low + Math.floor((high - low) / 2)
        let row = Math.floor(mid / cols)
        let col = Math.floor(mid % cols)
        if (matrix[row][col] === target) {
            return true
        } else if (matrix[row][col] < target) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return false
};
