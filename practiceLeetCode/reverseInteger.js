function reverse(x) {
    let absoluteX = Math.abs(x)
    let result;
    if (x > 0) {
        result = Number(String(absoluteX).split("").reverse().join(""));
    }else{
        result = Number("-" + String(absoluteX).split("").reverse().join(""))
    }

    if (result > 2**31 - 1 || result < -(2**31)) {
        return 0;
    }else{
        return result;
    }
}

function reverse(x) {
    let result = "";
    let absX = Math.abs(x);

    while (absX > 0) {
        result += absX % 10;
        absX = Math.floor(absX / 10);
    }

    if (x < 0) {
        result = "-" + result;
    }

    result = Number(result);

    if (result > 2 ** 31 - 1 || result < -(2 ** 31) || result === 0) {
        return 0;
    } else {
        return result;
    }
}

console.log(reverse(-123));
console.log(reverse(120));