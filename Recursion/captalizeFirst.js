

function captalizeFirst(arr) {
    let newArr = []
    if (arr.length === 0) return newArr
    let tmp = arr[0].substr(0, 1).toUpperCase() + arr[0].substr(1)
    newArr.push(tmp)
    newArr = newArr.concat(captalizeFirst(arr.slice(1)))
    return newArr
}


/* Solution by lecture */

// function capitalizeFirst (array) {
//     if (array.length === 1) {
//       return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }
//     const res = capitalizeFirst(array.slice(0, -1));
//     const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//     res.push(string);
//     return res;
// }


const a = ['dinesh', 'rahl']
const res = captalizeFirst(a)

console.log(res)