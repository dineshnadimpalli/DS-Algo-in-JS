

function binarySearch(arr, val){
    let start = 0, end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] < val) {
            start = mid+1
        } else if(arr[mid] > val) {
            end = mid-1
        } else {
            return mid
        }
    }
    return -1
}
  

let arr = [10, 15, 20, 25, 30]
console.log(binarySearch(arr, 15))