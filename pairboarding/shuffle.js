// function shuffle(arr) {
//     return arr.sort(() => Math.random() - 0.5);
// }

function shuffle(arr) {
    let newArr = new Array(...arr);

    for (let i = 0; i < arr.length; i++) {
        let newIdx = Math.floor(Math.random() * arr.length);
        [newArr[i], newArr[newIdx]] = [newArr[newIdx], newArr[i]];
    }
    return newArr;
}

console.log(shuffle([1,2,3,4,5]))