



function merge(arr1, arr2) {
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


function mergeSort(arr) {
    if(arr.length<=1)   return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    // console.log(left, right)
    return merge(left, right)
}


let a = [12, 0, -4, 10, 5, -11111]
console.log(mergeSort(a))