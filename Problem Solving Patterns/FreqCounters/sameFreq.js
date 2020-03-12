
function sameFreq(a, b) {
    let tmp = 0
    let obj = {}
    while (a!== 0) {
        tmp = a % 10
        a = Math.floor(a / 10)
        obj[tmp] = (obj[tmp] || 0) + 1
    }
    console.log(obj)
    tmp = 0
    while (b!== 0) {
        tmp = b % 10
        b = Math.floor(b / 10)
        if(!obj[tmp]) return false
        obj[tmp]--
    }
    return true
}

let a = 183
let b = 381

let res = sameFreq(a, b)

console.log(res)