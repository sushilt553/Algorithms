function commonSubsets(arr1, arr2) {
    let intersection = fastIntersection(arr1, arr2);

    return subsets(intersection);
}

function subsets(arr) {
    if(arr.length === 0) return [[]];

    let first = arr.shift();
    let subs = subsets(arr);

    let rem = subs.map((ele) => ele.concat([first]));

    return subs.concat(rem);
}

function fastIntersection(arr1, arr2) {
    let intersection = [];
    let set = new Set(arr1);

    for (let i = 0; i < arr2.length; i++) {
        if (set.has(arr2[i])) intersection.push(arr2[i]);
    }

    return intersection;
}

console.log(commonSubsets([1,2,3], [1,2]))