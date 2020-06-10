var maximum69Number = function (num) {
    let string = String(num).split("");
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "6") {
            string[i] = "9"
            break;
        }
    }
    return Number(string.join(""));
};

console.log(maximum69Number(9669));