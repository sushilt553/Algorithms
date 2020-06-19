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

console.log(balancedStringSplit("RLRRLLRLRL"))