function sillyYears(year) {
    let newArr = [];
    
    while (newArr.length < 10) {
        let first2 = Math.floor(year / 100);
        let second2 = year % 100;
        let mid = Number(String(year).slice(1, 3));

        if (first2 + second2 === mid) newArr.push(year);
        year++;
    }

    return newArr;
}

console.log(sillyYears(1978));