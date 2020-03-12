

function stringifyNumbers(obj) {
    let res = {}
    for (let ele in obj) {
        let val = obj[ele]
        if (typeof val === 'number') {
            res[ele] = val.toString()
        }
        else if(!(val instanceof Array) && (val instanceof Object)) {
            res[ele] = stringifyNumbers(val)
        } else {
            res[ele] = val
        }

    }
    return res
}


/* Solution by lecture */

// function stringifyNumbers(obj) {
//     var newObj = {};
//     for (var key in obj) {
//       if (typeof obj[key] === 'number') {
//         newObj[key] = obj[key].toString();
//       } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
//         newObj[key] = stringifyNumbers(obj[key]);
//       } else {
//         newObj[key] = obj[key];
//       }
//     }
//     return newObj;
// }
  


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}


console.log(stringifyNumbers(obj))


/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/