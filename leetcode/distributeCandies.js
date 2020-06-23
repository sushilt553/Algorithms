var distributeCandies = function(candies, num_people) {
    let arr =  new Array(num_people).fill(0);

    let i = 0;
    let c = 1;
    while (candies > 0) {
        if (candies <= c) c = candies;
        arr[i] += c;
        candies -= c;
        i = (i + 1) % num_people;
        c++;
    }

    return arr;
}

console.log(distributeCandies(10, 4))
console.log(distributeCandies(10, 3))