// var balancedStringSplit = function(str) {
//    let matches = 0;
//    let balance = 0;

//    for (let i = 0; i < str.length; i++) {
//        if (str[i] === "L") {
//            balance--;
//        }else if (str[i] === "R") {
//            balance++;
//        }

//        if (balance === 0) matches++;
//    }

//    return matches;
// }

// var balancedStringSplit = function(str) {
//     let obj = {
//         "(": ")",
//         "{": "}",
//         "[": "]"
//     }

//     let stack = [];

//     for (let i = 0; i < str.length; i++) {
//         if (obj[str[i]]) {
//             stack.push(obj[str[i]]);
//         }else{
//             let ele = stack.pop();
//             if (str[i] !== ele) return false;
//         }        
//     }
//     if (stack.length > 0) return false;
//     return true;
// }

// var balancedStringSplit = function(str) {
//     let matches = 0;
//     let stack = [];

//     stack.push(str[0]);

//     for (let i = 1; i < str.length; i++) {
//         let ele = stack[stack.length - 1];
//         if (ele && ele !== str[i]) {
//             stack.pop();
//         }else{
//             stack.push(str[i]);
//         }

//         if (stack.length === 0) matches++;
//     }  
//     return matches
// }

// console.log(balancedStringSplit("RLRRLLRLRL"))


// console.log(balancedStringSplit("()"))
// console.log(balancedStringSplit("[{()]"))
// console.log(balancedStringSplit("{()}"))
// console.log(balancedStringSplit("{()}}"))

function balancedStringSplit(str) {
    let matches = 0;
    let balance = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "L") balance++;
        if (str[i] === "R") balance--;

        if (balance === 0) matches++;
    }
    return matches;
}


function balancedStringSplit(str) {
    let matches = 0;
    let stack = [];

    stack.push(str[0]);

    for (let i = 1; i < str.length; i++) {
        let ele = stack[stack.length - 1];

        if (ele && ele !== str[i]) {
            stack.pop();
        }else{
            stack.push(str[i]);
        }

        if (stack.length === 0) matches++;
    }

    return matches;
}

console.log(balancedStringSplit("LLRR"))