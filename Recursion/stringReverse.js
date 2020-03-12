
function reverse(str) {
    if (str.length === 0) return ''
    return str[str.length-1].concat(reverse(str.slice(0, str.length-1)))
}

function isPalindrome(str) {
    return str===reverse(str)
}

const a = 'wow'
// const res = reverse(a)
const res = isPalindrome(a)
console.log(res)


