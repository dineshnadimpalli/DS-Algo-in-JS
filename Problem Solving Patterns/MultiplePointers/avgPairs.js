

function avgPairs(arr, n) {
    let i = 0, j = arr.length - 1
    let avg = 0
    while (i < j) {
        avg = (arr[i] + arr[j]) / 2
        if (avg === n) return true
        else if (avg < n) i++
        else j--
    }
    return false
}


let a = []
let res = avgPairs(a, 4.1)
console.log(res)