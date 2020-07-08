function sillyYears(year) {
    let result = [];

    while (result.length < 10) {
        if (firstTwoDigits(year) + lastTwoDigits(year) === middleTwoDigit(year)) {
            result.push(year);
        }
        year++;
    }
    return result;
}

function firstTwoDigits(yr) {
   return Math.floor(yr / 100);
}

function lastTwoDigits(yr) {
    return yr % 100;
}

function middleTwoDigit(yr) {
    let digits = Math.floor(yr / 10);
    return digits % 100;
}

console.log(sillyYears(1978))