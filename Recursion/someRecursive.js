

function someRecursive(arr, cb) {
    if(arr.length===0) return false
    return cb(arr[0])===true || someRecursive(arr.slice(1), cb)
}

const odd = val => val % 2 !== 0

const a = []
const res = someRecursive(a, odd)

console.log(res)