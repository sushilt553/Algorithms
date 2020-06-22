var numPrimeArrangements = function(n) {
    let primes = 0;
    let nonPrimes = 0;
    let result = 1;
    let max = 10 ** 9 + 7;

    for (let i = 1; i <= n; i++) {
        if (isPrime(i)) {
            primes++;
        }else{
            nonPrimes++;
        }
    }

    while (nonPrimes > 0) {
        result = (result * nonPrimes) % max;
        nonPrimes--;
    }

    while(primes > 0) {
        result = (result * primes) % max;
        primes--
    }
    return result;
}

var isPrime = function(num) {
    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(numPrimeArrangements(4))