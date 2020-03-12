
function power(base, pow){
    if (pow === 0) return 1
    return base*power(base, --pow)
}


let res = power(2, 0)
console.log(res)