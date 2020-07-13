function commonSubsets(arr1, arr2) {
    let intersection = fastIntersection(arr1, arr2);
}

function fastIntersection(arr1, arr2) {
    let intersection = [];
    let set = new Set(arr1);

    for (let i = 0; i < arr2.length; i++) {
        if (set.has(arr2[i])) intersection.push(arr2[i]);
    }

    return intersection;
}