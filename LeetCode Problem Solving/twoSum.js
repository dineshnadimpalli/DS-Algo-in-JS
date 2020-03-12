
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


function binarySearch(arr, val){
    let start = 0, end = arr.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (arr[mid] < val) {
            start = mid+1
        } else if(arr[mid] > val) {
            end = mid-1
        } else {
            return arr[mid]
        }
    }
    return null
}


let nums = [3, 3, 4], target = 6

var twoSum = function (nums, target) {
    // let numHash = {}
    // let arr = []
    // nums.forEach((element, i) => {
    //     let diffValue = target - element
    //     if (numHash[diffValue.toString()] !== undefined) {
    //         arr.push([numHash[diffValue.toString()], i])
    //     }
    //     numHash[element.toString()] = i
    // });
    // return arr[0]
    let numHash = {}
    for (let i =0; i < nums.length; i++){
        let diffValue = target - nums[i]
        if (numHash[diffValue.toString()] !== undefined) {
            return [numHash[diffValue.toString()], i]
        }
        numHash[nums[i].toString()] = i
    }
    return []
}

console.log(twoSum(nums, target))