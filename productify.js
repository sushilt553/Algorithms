// function productify(arr) {

//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         let product = 1;
//         for (let j = 0; j < arr.length; j++) {
//             if (i !== j) {
//                 product *= arr[j];
//             }
//         }
//         newArr.push(product);
//     }
//     return newArr;
// }

function productify(arr) {
    let product = arr.reduce((a, b) => a * b);
    return arr.map((ele) => product / ele);
}

console.log(productify([1,2,3]))