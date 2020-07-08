function productify(arr) {
    let totalProduct = arr.reduce((acc, ele) => acc * ele);
    return arr.map((ele) => totalProduct / ele);
}

function productify1(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }
        result.push(product);
    }
    return result;
}

console.log(productify([1,2,3,4,5]))
console.log(productify1([1,2,3,4,5]))