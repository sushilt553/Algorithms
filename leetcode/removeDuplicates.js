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

var removeDuplicates = function(S) {
    let stack = [];

    for (let i = 0; i < S.length; i++) {
        if (S[i] !== stack[stack.length - 1]){
            stack.push(S[i]);
        }else{
            stack.pop();
        }
    }
    return stack.join("")
}

console.log(removeDuplicates("abbaca"));