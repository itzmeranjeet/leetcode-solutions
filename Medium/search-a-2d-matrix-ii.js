/*
 * LeetCode: Search a 2D Matrix II
 * Difficulty: Medium
 * URL: https://leetcode.com/problems/search-a-2d-matrix-ii/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let rows = matrix.length
    let cols = matrix[0].length
    let low = 0
    let high = rows-1
    while(high >=0 && low < cols){
        if(matrix[high][low] === target){
            return true
        }else if(matrix[high][low] > target){
            high--
        }else{
            low++
        }
    }
    return false
};
