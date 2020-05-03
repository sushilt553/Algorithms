function subset(arr) {
    if (arr.length === 0) return [[]];
    
    let first = arr[0];
    let subs = subset(arr.slice(1));
    let newSubs = subs.map((sub) => sub.concat([first]));
    return subs.concat(newSubs);
}

console.log(subset([]));
console.log(subset([1,2,3]));
