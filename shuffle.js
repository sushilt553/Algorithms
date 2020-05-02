function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array;
}
console.log(shuffle([1,2,3]));