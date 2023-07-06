// Flatten a nested array. You must account for varying levels of nesting.

function steamrollArray(arr) {
    const flat = [].concat(...arr);
    return flat.some(Array.isArray)? steamrollArray(flat): flat;
    }
  
  let result = steamrollArray([1, [2], [3, [[4]]]]);
  console.log(result);