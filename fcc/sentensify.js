function sentensify(str) {
    // Only change code below this line
    //combine an array into a string using the join method
    return str
    .split(/\W/)
    .join(" ")
    
  
  
  
    // Only change code above this line
  }
  
  let result = sentensify("May-the-force-be-with-you");
  console.log(result)