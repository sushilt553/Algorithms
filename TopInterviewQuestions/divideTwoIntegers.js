var divide = function(dividend, divisor) {
    if (divisor === 0 || dividend === 0) return 0;
    if ((divisor === 1 && dividend > 0) || (divisor === -1 && dividend < 0)) return dividend;  
    if ((divisor === 1 && dividend < 0) || (divisor === -1 && dividend > 0)) return -dividend;
    if ((divisor === 1 && dividend < 0) || (divisor === 1 && dividend < 0)) return -divisor;
    let sum = 0;
    let count = 0;
    while (sum < Math.abs(dividend)) {
        sum += Math.abs(divisor);
        if (sum > Math.abs(dividend) && divisor < 0 && dividend < 0) {
            return count;
        }else if (sum > Math.abs(dividend) && (divisor > 0 && dividend > 0)) {
            return count;
        } else if (sum > Math.abs(dividend) && (divisor < 0 || dividend < 0)) {
            return -count;
        }

        sum > Math.abs(dividend) && (divisor < 0 || dividend < 0)
        count++;
    }
    if (dividend < 0 && divisor < 0) {
        return count;
    }else if (dividend > 0 && divisor > 0){
        return count;
    }else if (dividend < 0 || divisor < 0) {
        return -count;
    }
}

console.log(divide(10, 3));
console.log(divide(10, -3));