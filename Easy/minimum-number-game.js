/*
 * LeetCode: Minimum Number Game
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/minimum-number-game/description/?envType=problem-list-v2&envId=prshgx6i
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    const sortedArr = nums.sort((a,b)=> a-b)
    let newArr = []

    for(let i=0; i<sortedArr.length; i+=2){
            newArr.push(sortedArr[i+1])
            newArr.push(sortedArr[i])
    }
        return newArr
};
