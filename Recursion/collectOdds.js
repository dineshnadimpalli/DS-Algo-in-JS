

function collectOdds(arr) {
    let newArr = []
    if (arr.length === 0) return newArr
    if (arr[0] % 2 !== 0) newArr.push(arr[0])
    newArr = newArr.concat(collectOdds(arr.slice(1)))
    // console.log(newArr)
    return newArr
}

const a = [1, 2, 3, 4, 5]
const res = collectOdds(a)
console.log(res)