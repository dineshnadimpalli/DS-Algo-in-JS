function nestedEvenSum (obj) {
    let res = 0
    for (ele in obj) {
        let val = obj[ele]
        // console.log(val, val instanceof Object, val instanceof Array)
        if (!(val instanceof Array) && (val instanceof Object)) {
            res += nestedEvenSum(val)
        }
        else {
            if (typeof val === 'number' && val%2===0) {
                res += val
            }
        }
    }
    return res
}


/* Solution by lecture */

// function nestedEvenSum (obj, sum=0) {
//     for (var key in obj) {
//         if (typeof obj[key] === 'object'){
//             sum += nestedEvenSum(obj[key]);
//         } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0){
//             sum += obj[key];
//         }
//     }
//     return sum;
// }


var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj2)) // 6
// nestedEvenSum(obj2); // 10