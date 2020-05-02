Array.prototype.myMap = function(fn) {
    let mapped = [];

    this.forEach((ele) => mapped.push(fn(ele)))
    return mapped;
}

console.log([1,2,3].myMap((ele) => ele * 2));
console.log([1,2,3].myMap((ele) => ele));