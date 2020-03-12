let t1, t2

/* Solution 1 */
function addUpToN1(n) {
    let total = 0
    for (let i = 1; i <= n; i++){
        total += i
    }
    return total
}

t1 = Date.now()
addUpToN1(1000000000)
t2 = Date.now()

console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)



/* Solution 2 */
function addUpToN2(n) {
    return n*(n+1)/2
}

t1 = Date.now()
addUpToN2(1000000000)
t2 = Date.now()

console.log(`Time elapsed: ${(t2-t1)/1000} seconds`)
