function titleCaseEdit(title) {
 // Split the string into an array of words
 let s = title.split(' ');

 // Capitalize the first letter of each word
 for (let i = 0; i < s.length; i++) {
   var j = s[i];
   s[i] = j.charAt(0).toUpperCase() + j.slice(1);
 }

 // Join the capitalized words back into a string
 var capitalizedString = s.join(' ');

 return capitalizedString;
}

// Do not edit this line;
module.exports = titleCaseEdit;