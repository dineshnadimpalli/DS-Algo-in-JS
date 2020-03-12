

function zeroSum(arr) {
    let left = 0;
    let right = arr.length - 1
    let sum = 0
    while (left < right) {
        sum = arr[left] + arr[right]
        if (sum == 0) {
            return [arr[left], arr[right]]
        }
        else if (sum > 0) {
            right--
        }
        else {
            left++
        }
    }
    return 0
}

let a = [-5, -3, -1, 0]
let res = zeroSum(a)
console.log(res)