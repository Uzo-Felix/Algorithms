// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

function sumPrimes(num) {
    let primes = [];
    for(let i =2;i<=num; i++){
      if(primes.every(prime => i%prime !== 0))
      primes.push(i)
    }
    return primes.reduce((a,b)=> a+b);
  }
  
  let result = sumPrimes(10);
  console.log(result);