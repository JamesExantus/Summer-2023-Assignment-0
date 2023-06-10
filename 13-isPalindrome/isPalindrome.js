function isPalindrome(word) {
  // Insert code here;
  
  
         
        let palin = true;  
        let l = word.length; 

        for(let i = 0; i < l; i++)
        {
          if(word.charAt(i) != word.charAt(l-1-i)) {
            
            palin = false;
         
          }
        }
        return palin;
}

// Do not edit this line;
module.exports = isPalindrome;