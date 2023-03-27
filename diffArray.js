//difference between two arrays
function diffArray(arr1, arr2) {
    return arr1
    .concat(arr2)
    .filter((item)=> !arr1.includes(item) || !arr2.includes(item))
  }
  
  let result = diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  console.log(result);
