// Return the lowest index at which a value 
// (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.


function getIndexToIns(arr, num) {
    let index = 0;
    arr.sort((a,b) => a-b)
    for(let i = 0; i<arr.length; i++){
      if(arr[i] >= num){
        return i
      }
    }
    return arr.length;
  }
  
  let result = getIndexToIns([40, 60], 50);
  console.log(result);