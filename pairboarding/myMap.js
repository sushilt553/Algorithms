Array.prototype.map = function(cb) {
    let mappedArr = [];

    for (let i = 0; i < this.length; i++) {
        mappedArr.push(cb(this[i]));
    }
    return mappedArr;
}

console.log([1,2,3,4,5].map(function(ele) {return ele * 2}));