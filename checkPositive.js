//every method to check that every element in an array meets a criteria
function checkPositive(arr) {
    // Only change code below this line
    return arr.every(value => value >= 0)
    ;
  
  
    // Only change code above this line
  }
  
  let result = checkPositive([1, 2, 3, -4, 5]);
  console.log(result)