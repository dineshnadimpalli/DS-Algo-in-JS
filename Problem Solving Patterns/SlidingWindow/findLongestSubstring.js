
/* Solution 1 */

/* O(n) solution */

// function findLongestSubstring(a) {
//     let resObj = {}
//     let maxLen = Number.MIN_VALUE
//     let i = 0, j = 0
//     while (i < a.length+1 && j < a.length+1) {
//         // console.log("----i------j----", i, j, resObj)
//         if(j-i>maxLen)    maxLen=j-i
//         if (resObj[a[j]]) {
//             i = resObj[a[j]]
//             j = resObj[a[j]]
//             resObj = {}
//         } else {
//             resObj[a[j]] = j + 1
//             j++
//         }
//     }
//     return maxLen===Number.MIN_VALUE ? 0 : maxLen
// }



/* Solution 2 */

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }

let a = 'thisisawesome'
let res = findLongestSubstring(a)
console.log(res)