/*
 * LeetCode: First Unique Character in a String
 * Difficulty: Easy
 * URL: https://leetcode.com/problems/first-unique-character-in-a-string/description/?envType=problem-list-v2&envId=prshgx6i
 * Language: javascript
 *
 * Synced by Personal LeetHub
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
   let freq = {}
   for(const fr of s){
    freq[fr] = (freq[fr] || 0) + 1
   }

   for(let i=0; i< s.length; i++){
    if(freq[s[i]] == 1 ) return i
   }
   return -1
};
