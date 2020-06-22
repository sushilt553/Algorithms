function dayOfYear(date) {
    let time = `${date.slice(0, 4)}-01-01`;
    const scale = 86400000;
    return ((Date.parse(date) - Date.parse(time)) / scale) + 1
}

console.log(dayOfYear("2019-01-09"))