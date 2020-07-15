// Algorithm Analysis
// Asymptotic Notation: Language that allows us to analyze program running time by identifying its behavior as input size for the algorithm increases.
// Algorithm factors: 
    // External Factors: Computer speed, Programming Language, Compiler
    // Main/Important Factors: Total number of operations, Rate of growth.
// Big-O Notation: Worst Case Scenario (Time and Space Complexity)
    //O(1): Constant time
    //O(logn): Logarithmic time
    //O(n): Linear time
    //O(nlogn): Linear logarithmic
    //O(n**2), O(n**3): Quadratic time
    //O(2**n): Exponential time
    //O(n!): Factorial time

function isPrime(num) {
    if (num < 2) return false;

    let limit = Math.sqrt(num);

    for (let i = 2; i <= limit; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(isPrime(1000000007));
console.log(isPrime(14));
console.log(isPrime(7));