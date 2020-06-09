var generateTheString = function(n) {
    let result = "";

    let char1 = "a";
    let char2 = "b";

    if (n % 2 === 0) {
        let i = 0;
        while (i < n) {
            if (i === n - 1) {
                result += char2;
            }else{
                result += char1;
            }
            i++;
        }
    }else{
        let i = 0;
        while (i < n) {
            result += char1;
            i++;
        }
    }
    return result;
}