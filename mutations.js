//Return true if the string in the first element of the array contains all 
//of the letters of the string in the second element of the array.
function mutation(arr) {
    return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter){
      return arr[0].toLowerCase().indexOf(letter) !== -1;
      });
    
  }
  
  let result = mutation(["hello", "hey"]);
  console.log(result);