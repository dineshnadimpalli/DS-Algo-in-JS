function capitalizeWords(arr) {
    // add whatever parameters you deem necessary - good luck!
    let newArr = []
    if (arr.length === 0) return newArr
    let tmp = arr[0].toUpperCase()
    newArr.push(tmp)
    newArr = newArr.concat(capitalizeWords(arr.slice(1)))
    return newArr
}
  
/* Solution by lecture */

// function capitalizeWords (array) {
//     if (array.length === 1) {
//       return [array[0].toUpperCase()];
//     }
//     let res = capitalizeWords(array.slice(0, -1));
//     res.push(array.slice(array.length-1)[0].toUpperCase());
//     return res;
   
// }
  
let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']
  


