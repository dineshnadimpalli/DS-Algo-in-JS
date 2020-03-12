

function isSubsequence(a, b) {
    let i = 0, j = 0
    let count = 0
    while (i < a.length && j < b.length) {
        if (a[i] === b[j]) {
            count++
            i++
            j++
        }
        else {
            j++
        }
    }
    if (count === a.length) return true
    return false
}

/* Recursive approach */

function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
}



let a = 'hello'
let b = 'helo world'
let res = isSubsequence(a, b)
console.log(res)