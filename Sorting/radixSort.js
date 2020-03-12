

function getDigit(num, i) {
    return Math.floor(num/Math.pow(10, i)) % 10
}

function getNoOfDigits(num) {
    if(num==0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}


function getMaxLen(arr) {
    let maxLen = 0
    for (let i = 0; i < arr.length; i++){
        let currLen = getNoOfDigits(arr[i])
        if (currLen > maxLen) maxLen = currLen
    }
    return maxLen
}


function radixSort(arr) {
    let maxDigits = getMaxLen(arr)
    for (let i = 0; i < maxDigits; i++){
        let resultBuckets = Array.from({length:10},()=>[])
        for (let j = 0; j < arr.length; j++){
            let index = getDigit(arr[j], i)
            resultBuckets[index].push(arr[j])
        }
        arr = [].concat(...resultBuckets)
    }
    // console.log(arr)
    return arr
}


let a = [1232345674123456789098765432345678765434, 654, 0, 4, 12345678, 7654323223452345661234567887654321234567890]
console.log(radixSort(a))