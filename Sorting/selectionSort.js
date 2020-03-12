

function selectionSort(arr) {
    let minIndex
    for (let i = 0; i < arr.length; i++){
        minIndex = i
        for (let j = i+1; j < arr.length; j++){
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        if (i !== minIndex) {
            swap(arr, i, minIndex) 
        }
    }
    return arr
}


function swap(arr, i, j) {
    let tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
    // console.log(arr)
    // return arr
}

let a = [12, 54, 7, 0, -3]
console.log(selectionSort(a))