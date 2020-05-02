function validIp(string) {
    let arr = string.split(".").map((ele) => Number(ele));

    return arr.every((ele) => ele >= 0 && ele <= 255);
}

console.log(validIp("232.11.23"));
console.log(validIp("232.11.266"));
console.log(validIp("232.-1.266"));