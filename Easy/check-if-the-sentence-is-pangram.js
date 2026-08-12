/*
 * LeetCode: Check if the Sentence Is Pangram
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/?envType=problem-list-v2&envId=prshgx6i
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let countStr = {}
    if(sentence.length < 26) return false
    if (sentence.length >= 26) {
        for (let s of sentence) {
            countStr[s] = (countStr[s] || 0) + 1
        }
