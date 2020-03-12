

function naiveSearch(long, short) {
    let count = 0, shortPos = 0
    for (let i = 0; i < long.length; i++){
        if (long[i] === short[shortPos]) {
            // console.log(long[i] , short[shortPos])
            ++shortPos
            if (shortPos === short.length) {
                count++
                shortPos = 0
            }
        } else {
            shortPos = 0
        }
    }
    return count
}


/* Lecture solution */

// function naiveSearch(long, short) {
//     let count = 0
//     for (let i = 0; i < long.length; i++){
//         for (let j = 0; j < short.length; j++){
//             if (short[j] !== long[i + j]) break
//             if (j === short.length - 1) count++
//         }
//     }
//     return count
// }



console.log(naiveSearch('lorie loled lorie loled lorie loledlorie loled lorie loled', 'lo'))