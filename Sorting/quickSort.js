

function findPivot(arr, start = 0, end = arr.length - 1) {
    function swap(arr, i, j) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
        // console.log(arr)
        // return arr
    }

    let pivot = arr[start]
    let pIndex = start
    for (let i = start+1; i <= end; i++){
        if (arr[i] < pivot) {
            pIndex++
            swap(arr, pIndex, i)
        }
    }
    swap(arr, pIndex, start)
    return pIndex
}


function quickSort(arr, start=0, end=arr.length-1) {
    if (start <= end) {
        let pivot = findPivot(arr, start, end)
        quickSort(arr, start, pivot - 1)
        quickSort(arr, pivot + 1, end)
    }
    
    return arr
}


let a = [12, 0, -4, 10, 5, -11111]
console.log(quickSort(a))