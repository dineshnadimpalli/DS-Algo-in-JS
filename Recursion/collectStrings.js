

function collectStrings(obj) {
    let res = []
    for (let ele in obj) {
        let val = obj[ele]
        if (typeof val === 'string') {
            res.push(val)
        }
        if(!(val instanceof Array) && (val instanceof Object)) {
            res = res.concat(collectStrings(val))
        } 
    }
    return res
}


/* Solution by lecture */

// function collectStrings(obj) {
//     var stringsArr = [];
//     for(var key in obj) {
//         if(typeof obj[key] === 'string') {
//             stringsArr.push(obj[key]);
//         }
//         else if(typeof obj[key] === 'object') {
//             stringsArr = stringsArr.concat(collectStrings(obj[key]));
//         }
//     }
 
//     return stringsArr;
// }



const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])