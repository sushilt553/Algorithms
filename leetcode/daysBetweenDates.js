// var daysBetweenDays = function(date1, date2) {
//     date1 = convertToArr(date1);
//     date2 = convertToArr(date2);
//     let yearDiff = Math.abs(date1[0] - date2[0]);
//     let monthDiff = Math.abs(date1[1] - date2[1]);
//     let daysDiff = Math.abs(date1[2] - date2[2]);

//     return Math.abs(yearDiff * 365 - monthDiff * 31 - daysDiff);
// }

// var convertToArr = (date) => {
//     return date.split("-").map((n) => Number(n));
// }

var daysBetweenDays = function (date1, date2) {
    if (date1 === date2) return 0;

    if (date2 > date1) return (new Date(date2) - new Date(date1)) / (1000 * 60 * 60 * 24);

    return (new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24);
}

console.log(daysBetweenDays("2019-06-29", "2019-06-30"));
console.log(daysBetweenDays("2019-01-15", "2019-12-31"));