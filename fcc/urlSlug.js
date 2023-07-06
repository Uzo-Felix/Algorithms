// Only change code below this line
//convert strings to url slugs
function urlSlug(title) {
    return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-")
  
  
  }
  // Only change code above this line
  let result = urlSlug(" Winter is coming");
  console.log(result)
  