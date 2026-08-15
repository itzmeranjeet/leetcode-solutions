/*
 * LeetCode: Squares of a Sorted Array
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/squares-of-a-sorted-array/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // Approach 1
    // const result = nums.map((num) => num * num)
    // const sortedResult = result.sort((a, b) => a - b)

    // Approach 2
    // const neg = []
    // const pos = []
    // const final = []
    // for (let i = 0; i < nums.length; i++) {
    //     if (nums[i] > 0) {
    //         pos.push(nums[i])
    //     }
    //     else {
    //         neg.push(nums[i])
    //     }

    // }

    // // if (pos.length !== 0) {
    //     for (let i = 0; i < pos.length; i++) {
    //         pos[i] = pos[i] * pos[i]
    //     }
    // // }

    // // if (neg.length !== 0) {
    //     for (let i = 0; i < neg.length; i++) {
    //         neg[i] = neg[i] * neg[i]
    //     }
    //     neg.reverse()
    // // }
    // let posV = 0
    // let negV = 0
    // console.log(neg, pos)
    // while (posV < pos.length && negV < neg.length) {
    //     if (neg[negV] < pos[posV]) {
    //         final.push(neg[negV])
    //         negV++
    //     }
    //     else {
    //         final.push(pos[posV])
    //         posV++
    //     }
    // }

    // while (posV < pos.length) {
    //     final.push(pos[posV])
    //     posV++
    // }
    // while (negV < neg.length) {
    //     final.push(neg[negV])
    //     negV++
    // }

    // Approach 3
    let left = 0
    let right = nums.length -1
    let idx = nums.length -1
    let final = []

    while(left <= right){
        let leftSq = nums[left] **2
        let rightSq = nums[right] **2

        if(leftSq < rightSq){
            final[idx] = rightSq
            right--
        }
        else{
            final[idx] = leftSq
            left++
        }
        idx--
    }
    // return sortedResult // 1
    return final //2, 3
};
