// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
    let newArr = arr.sort((a,b)=> a-b);
    let range = [];
    let num = newArr[0];
    let common = 1;
    while(num <= newArr[1]){
      range.push(num);
      num++;
    };
    while(range.some(b=> common % b !== 0)){
      common ++
    }
    return common;
  }
  // function smallestCommons(arr) {
  //   const max = Math.max(...arr);
  //   const min = Math.min(...arr);
  
  //   // Create an array with all the numbers in the range
  //   const range = Array.from({length: max - min + 1}, (_, i) => i + min);
  
  //   // Calculate the least common multiple using the reduce function
  //   const lcm = range.reduce((a, b) => {
  //     const gcd = (x, y) => y === 0 ? x : gcd(y, x % y); // define a gcd function
  //     return Math.abs(a * b) / gcd(a, b); // use gcd to calculate lcm
  //   });
  
  //   return lcm;
  // }
  
  
  let result = smallestCommons([1,5]);
  console.log(result);
  
  