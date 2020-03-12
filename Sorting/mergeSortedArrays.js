
function mergeSortedArrays(arr1, arr2) {
    let res = [], i = 0, j = 0
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }

    while (i < arr1.length) {
        res.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        res.push(arr2[j])
        j++
    }

    return res
    
}


let a = [1, 3, 5]
let b = [2, 4]
console.log(mergeSortedArrays(a, b))