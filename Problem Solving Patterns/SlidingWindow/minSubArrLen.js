
/* Solution 1 */

/* O(n) solution */

// function minSubArrLen(arr, n) {
//     let sum = 0
//     let minLen = Number.MAX_VALUE
//     let i = 0, j = 0
//     while (i < arr.length+1 && j < arr.length+1) {
//         // console.log(i, '-----------------', j)
//         if (sum < n) {
//             sum += (arr[j] && arr[j]) || 0
//             j++
//         } else {
//             let len = j - i
//             // console.log('------len-----', len)
//             if(len<=minLen)  minLen = len
//             sum -= (arr[i] && arr[i]) || 0
//             i++
//         }
//         // console.log("----sum-----", sum)
//     }

//     return minLen===Number.MAX_VALUE ? 0 : minLen
    
// }



/* Solution 2 */

function minSubArrLen(nums, sum) {
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;
   
    while (start < nums.length) {
      // if current window doesn't add up to the given sum then 
          // move the window to right
      if(total < sum && end < nums.length){
        total += nums[end];
              end++;
      }
      // if current window adds up to at least the sum given then
          // we can shrink the window 
      else if(total >= sum){
        minLen = Math.min(minLen, end-start);
              total -= nums[start];
              start++;
      } 
      // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
      else {
        break;
      }
    }
   
    return minLen === Infinity ? 0 : minLen;
  }

let a = [3,1,7,11,2,9,8,21,62,33,19]
let res = minSubArrLen(a, 52)
console.log(res)