



function insertionSort(arr) {
    let i, j
    for (i = 1; i < arr.length; i++){
        let currVal = arr[i]

        /* with for loop */

        // for (j = i - 1; j >= 0 && currVal < arr[j]; j--){
        //     // console.log(arr)
        //     arr[j+1] = arr[j]
        // }
        // console.log(arr, i, j)

        /* with while loop */
        j = i - 1
        while (j >= 0 && currVal < arr[j]) {
            arr[j + 1] = arr[j]
            // console.log(j)
            j--
        }
        arr[j+1] = currVal
    }
    return arr
}


let a = [12, 54, 7, 0, -3]
console.log(insertionSort(a))