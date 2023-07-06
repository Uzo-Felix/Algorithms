// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

// The first two numbers in the Fibonacci sequence are 0 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first seven numbers of the Fibonacci sequence are 0, 1, 1, 2, 3, 5 and 8.

// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
    if(num<=1) return 0;
    let arr = [1,1];
    let next = 0;
    while((next= arr[0] + arr[1]) <= num){
      arr.unshift(next)
    }
    return arr.filter(b => b%2 != 0).reduce((a,b)=> a+b,0)
  }
  
  let result = sumFibs(4);
  console.log(result);