var findMedianSortedArrays = function(num1, num2) {
    let merged = [];
    
    while (num1.length || num2.length) {
        let first = num1.length > 0 ? num1[0] : Infinity;
        let second = num2.length > 0 ? num2[0] : Infinity;

        let next;
        if (first < second) {
            next = num1.shift();
        }else{
            next = num2.shift();
        }

        merged.push(next);
    }

    let midIdx = Math.floor(merged.length / 2);

    if (merged.length % 2 !== 0) {
        return merged[midIdx];
    }else{
        return (merged[midIdx - 1] + merged[midIdx]) / 2;
    }
}

console.log(findMedianSortedArrays([], [1]))