// Remove all falsy values from an array. Return a new array; do not mutate the original array.

// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

function bouncer(arr) {
    let newArr = [...arr];
    return newArr.filter((item) => item);
  }
  
  let result = bouncer([7, "ate", "", false, 9]);
  console.log(result);