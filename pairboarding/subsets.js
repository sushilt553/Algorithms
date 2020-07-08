function subsets(arr) {
    if (arr.length === 0) return [[]];

    let first = arr.shift();
    let subs = subsets(arr);
    let remSubs = subs.map((ele) => ele.concat([first]));
    return subs.concat(remSubs);
}

console.log(subsets([1,2,3]))