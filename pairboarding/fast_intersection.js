const fastIntersection1 = function(arr1, arr2) {
    let intersection = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) intersection.push(arr1[i]);
        }
    }
    return intersection;
}

const fastIntersection2 = function(arr1, arr2) {
    arr1 = arr1.sort((a, b) => a - b);
    arr2 = arr2.sort((a, b) => a - b);

    let i = 0;
    let j = 0;
    let intersection = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            intersection.push(arr1[i]);
            i++;
            j++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        }else{
            j++;
        }
    }
    return intersection;
}

const fastIntersection3 = function(arr1, arr2) {
    let set = new Set(arr1);
    let intersection = [];

    // for (let i = 0; i < arr1.length; i++) {
    //     set.add(arr1[i]);
    // }

    for (let i = 0; i < arr2.length; i++) {
      if (set.has(arr2[i])) intersection.push(arr2[i]);
    }

    return intersection;
}

console.log(fastIntersection1([12,11,10,13], [1,2,12,13,10]));
console.log(fastIntersection2([12,11,10,13], [1,2,12,13,10]));
console.log(fastIntersection3([12,11,10,13], [1,2,12,13,10,10]));