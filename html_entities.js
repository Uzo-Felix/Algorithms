// Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
    return str.split("").map(b=> b=="&"? "&amp;" : b == "<"? "&lt;":
    b == ">"? "&gt;": b == '"'? "&quot;": b == "'"? "&apos;": b).join("");
    // return str.map(b=> b=="&"? "&amp;" : b == "<"?: "&lt;": b);
  }
  
  let result = convertHTML("Dolce & Gabbana");
  console.log(result);