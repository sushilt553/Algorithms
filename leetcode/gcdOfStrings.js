var gcdOfStrings = function(str1, str2) {
   [str1, str2] = [str1, str2].sort((a, b) => a.length - b.length);
   
   for (let i = str1.length; i > 0; i--) {
       let currStr = str1.slice(0, i);
       let a = str1.split(currStr).join("");
       let b = str2.split(currStr).join("");

       if (a.length === 0 && b.length === 0) return currStr;
   }
   return "";
}

console.log(gcdOfStrings("ABCABC", "ABC"))
console.log(gcdOfStrings("ABABAB", "ABAB"))
console.log(gcdOfStrings("LEET", "CODE"))