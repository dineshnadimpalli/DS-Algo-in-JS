

/* This logic only applies if the array is sorted */

function countUniqValues(arr) {
    let first = 0
    let second = 0
    let len = arr.length
    if(len===0) return 0
    while (first < len && second < len) {
        if (arr[first] !== arr[second]) {
            first++
            arr[first] = arr[second]
        }
        second++
    }
    return first+1
}


let a = [-4, -3, 0, 1, 1, 2, 2, 999]
let res = countUniqValues(a)
console.log(res)