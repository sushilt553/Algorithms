var removeDuplicates = function(S) {

    let i = 0
    while (i < S.length) {
        if (S[i] === S[i + 1]) {
            S = S.split("");
            S.splice(i, 2);
            S = S.join("");
            i = 0;
        }else{
            i++;
        }
    }

    return S;
}

console.log(removeDuplicates("abbaca"));