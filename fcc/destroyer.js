//seek and destroy
//the initial argument is an array
//remove from the array anything that matches
//the rest of the argument

function destroyer(arr, ...args) {
    // let test = Array.from(arguments).slice(1);
    // let test = Object.values(arguments).splice(1);
    return arr.filter((item)=> !args.includes(item) )
    
  }
  
  let result = destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  console.log(result);