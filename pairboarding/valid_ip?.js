const validIp = (str) => {
    let arr = str.split(".");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0 || arr[i] > 255) return false;
    }
    return true;
}

console.log(validIp("1.1.1.1"))
console.log(validIp("1.1.1.256"))
console.log(validIp("1.1.-1.256"))