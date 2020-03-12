
/* Solution 1 O(n^2) */

// function same(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false
//     }

//     for (let i = 0; i < arr1.length; i++){
//         let elemIndex = arr2.indexOf(arr1[i] ** 2)
//         if (elemIndex == -1) {
//             return false
//         }
//         arr2.splice(elemIndex, 1)
//     }
//     return true
// }


/* Solution 2 O(n) */

function same(arr1, arr2) {
    let freqCounter = {}
    if(arr1.length !== arr2.length) return false
    for (let num in arr1) {
        num = arr1[num]
        freqCounter[num] = (freqCounter[num] || 0) + 1
    }
    // console.log(freqCounter)
    for (let num in arr2) {
        num = arr2[num]
        num = Math.sqrt(num)
        if (!freqCounter[num] || freqCounter[num] < 0)
            return false
        else 
            freqCounter[num]--
    }
    // console.log(freqCounter)

    for (let key in freqCounter) {
        if(freqCounter[key]!==0) return false
    }
    return true
}


let a = [1, 2, 3, 2, 5]
let b = [9, 1, 4, 4, 11]

let res = same(a, b)

console.log(res)