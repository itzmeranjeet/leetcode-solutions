/*
 * LeetCode: Remove Duplicates from Sorted Array
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let off = 0;
    let res = 1
    let cm = 1
    while (cm < nums.length) {
        if (nums[cm] === nums[cm - 1]) {
            cm++
        } else {
            nums[off + 1] = nums[cm]
            console.log(nums)
            res++
            off++
            cm++
        }
    }
    // for(let i=0; i<nums.length; i++){
    //     if(nums[res] !== nums[i]){
    //        res++ 
    //        nums[res] = nums[i]
    //        console.log(nums)
    //     }

    // }
    return res
};
