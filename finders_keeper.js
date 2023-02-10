let num = 0;
function findElement(arr, func) {
  for(let i = 0; i<arr.length; i++){
    num = arr[i];
    if(func(num)){
      return num;
    }
      
  }
  return undefined;
  
}

let result = findElement([1, 2, 3, 4], num => num % 2 === 0);
console.log(result)