
function validAnagram(s1, s2) {
    let freqCounter = {}
    if(s1.length !== s2.length) return false
    for (let i in s1) {
        let char = s1[i]
        freqCounter[char] = (freqCounter[char] || 0) + 1
    }
    // console.log(freqCounter)
    for (let j in s2) {
        let char = s2[j]
        if (!freqCounter[char])
            return false
        else 
            freqCounter[char]--
    }
    // console.log(freqCounter)
    return true
}


let a = 'aab'
let b = 'zaa'

let res = validAnagram(a, b)

console.log(res)