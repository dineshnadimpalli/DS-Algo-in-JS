
function factorial(num){
    if (num === 0) return 1
    return num*factorial(--num)
}


function recursiveRange(num) {
    if (num === 0) return 0
    return num+recursiveRange(--num)
}



let res = recursiveRange(7)
console.log(res)