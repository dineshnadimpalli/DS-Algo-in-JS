


function charCount(str) {
    let res = {}


    /* Solution 1 */

    // for (let i = 0; i < str.length; i++){
    //     let char = str[i].toLowerCase()
    //     if (/[a-z0-9]/.test(char)) {
    //         if (res[char] > 0) res[char]++
    //         else res[char] = 1
    //     }
    // }


    /* Solution 2 */

    // for (let char of str){
    //     char = char.toLowerCase()
    //     if (/[a-z0-9]/.test(char)) {
    //         if (res[char] > 0) res[char]++
    //         else res[char] = 1
    //     }
    // }


    /* Solution 3 */

    // for (let char of str){
    //     char = char.toLowerCase()
    //     if (/[a-z0-9]/.test(char)) {
    //         res[char] = ++res[char] || 1
    //     }
    // }


    /* Solution 4 */

    for (let char of str){
        if (isAlphaNumeric(char)) {
            char = char.toLowerCase()
            res[char] = ++res[char] || 1
        }
    }

    return res
}


function isAlphaNumeric(char) {
    let code = char.charCodeAt(0)
    if (
        !(code > 47 && code < 58) &&    // Numeric (0-9)
        !(code > 64 && code < 91) &&    // Upper alpha (A-Z)
        !(code > 96 && code < 123)      // Lower alpha (a-z)
    ) {
        return false
    }
    return true
}

let r = charCount("Hi hello123 <<!_")
console.log(r)