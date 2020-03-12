
/* Solution 1 */

// function areThereDuplicates(a, b, c, d) {
//     let arr = [...arguments].sort()
//     let first = 0
//     let second = 1
//     let len = arr.length
//     while (first < len && second < len) {
//         if (arr[first] === arr[second]) {
//             return true
//         } else {
//             first++
//             second++
//         }
//     }
//     return false
// }


/* Solution 2 */

function areThereDuplicates(a, b, c, d) {
    console.log(arguments)
    // [Arguments] { '0': 'a', '1': 'b', '2': 'c', '3': 'a' }
    return new Set(arguments).size !== arguments.length
}

let a = ['a', 'b', 'c', 'a']
let res = areThereDuplicates(...a)
console.log(res)