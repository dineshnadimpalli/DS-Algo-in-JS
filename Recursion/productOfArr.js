

function productOfArray(arr) {
    let tmp = []
    if (arr.length === 0) return 1
    tmp = arr.slice(1)
    return arr[0]*productOfArray(tmp)
}

const a = [1, 2, 3, 4, 5]
const res = productOfArray(a)
console.log(res)