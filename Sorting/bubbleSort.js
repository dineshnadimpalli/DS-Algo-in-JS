
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++){
//         for (let j = 0; j < arr.length; j++){
//             if (arr[j] > arr[j+1]) {
//                 let tmp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j+1] = tmp
//             }
//         }
//     }
//     return arr
// }

/* Solution with less comparisions */

// function bubbleSort(arr) {
//     for (let i = arr.length; i > 0; i--){
//         for (let j = 0; j < i-1; j++){
//             if (arr[j] > arr[j+1]) {
//                 let tmp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j+1] = tmp
//             }
//         }
//     }
//     return arr
// }


/* Solution to remove unnecessary checks */

function bubbleSort(arr) {
    let noSwaps
    for (let i = arr.length; i > 0; i--){
        noSwaps = true
        for (let j = 0; j < i-1; j++){
            if (arr[j] > arr[j+1]) {
                let tmp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = tmp
                noSwaps = false
            }
        }
        // console.log("------counter------")
        if(noSwaps) break
    }
    return arr
}



let a = [12, 54, 7, 0, -3]
console.log(bubbleSort(a))