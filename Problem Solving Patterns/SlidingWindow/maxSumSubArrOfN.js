/* Solution 1 */

/* O(n) solution */

function maxSubArrSum(arr, n) {
    let maxSum = Number.MIN_VALUE
    let tmpSum = 0
    if(arr.length<n)    return null
    for (let i = 0; i < n; i++){
        tmpSum += arr[i]
    }
    maxSum = tmpSum
    for (let i = n; i < arr.length; i++){
        tmpSum += arr[i] - arr[i-n]
        maxSum = Math.max(tmpSum, maxSum)
    }
    return maxSum
}


/* Solution 2 */

// function maxSubArrSum(arr, num){
//     if (arr.length < num) return null;
 
//     let total = 0;
//     for (let i=0; i<num; i++){
//        total += arr[i];
//     }
//     let currentTotal = total;
//     for (let i = num; i < arr.length; i++) {
//        currentTotal += arr[i] - arr[i-num];
//        total = Math.max(total, currentTotal);
//     }
//     return total;
// }

let a = [4, 3, 4, 1, 1, 2, 2, 3]
let res = maxSubArrSum(a, 4)
console.log(res)