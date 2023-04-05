// Pig Latin is a way of altering English Words. The rules are as follows:

// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

// - If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
    const regex = /^[^aeiou]+/;
    const matches = str.match(regex);
      return matches !== null?
      str.replace(matches, "").concat(matches + 'ay')
      :str.concat('way');
  }
  
  
  // function translatePigLatin(str) {
  //   var firstVowel = str.search(/[aeiou]/);
    
  //   return firstVowel === 0 ? str + 'way' : str.substr(firstVowel) + str.substr(0, firstVowel) + 'ay';
  // }
  
  let result = translatePigLatin("rhythm");
  console.log(result);