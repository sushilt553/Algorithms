var balancedStringSplit = function(str) {
   let matches = 0;
   let balance = 0;

   for (let i = 0; i < str.length; i++) {
       if (str[i] === "L") {
           balance--;
       }else if (str[i] === "R") {
           balance++;
       }

       if (balance === 0) matches++;
   }

   return matches;
}

var balancedStringSplit = function(str) {
    let obj = {
        "(": ")",
        "{": "}",
        "[": "]"
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            stack.push(obj[str[i]]);
        }else{
            let ele = stack.pop();
            if (str[i] !== ele) return false;
        }        
    }
    if (stack.length > 0) return false;
    return true;
}

// console.log(balancedStringSplit("RLRRLLRLRL"))
console.log(balancedStringSplit("()"))
console.log(balancedStringSplit("[{()]"))
console.log(balancedStringSplit("{()}"))
console.log(balancedStringSplit("{()}}"))