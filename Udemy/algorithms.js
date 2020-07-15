//Algorithm Analysis
//Asymptotic Notation: Language that allows us to analyze program running time by identifying its behavior as input size for the algorithm increases.

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