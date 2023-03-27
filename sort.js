//sort an array alphabetically using the sort method
function mutation(arr) {
    return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter){
      return arr[0].toLowerCase().indexOf(letter) !== -1;
      });
    
  }
  
  let result = mutation(["hello", "hey"]);
  console.log(result)

  //ohen street, okhuoromi community, benin city edo state
  //Ring road