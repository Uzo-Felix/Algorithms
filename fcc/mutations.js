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




  // function mutation(arr) {
  //   let test = arr[1].toLowerCase();
  //   let target = arr[0].toLowerCase();
    
  //   for(let i = 0; i< test.length ; i++){
  //     if ( target.indexOf(test[i]) < 0) return false
  //   }
  //   return true
  // }
  
  // let result = mutation(["hello", "hey"]);
  // console.log(result);