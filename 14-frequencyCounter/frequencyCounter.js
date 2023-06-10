function frequencyCounter(word) {
  // Insert code here;
  let arr = {};
    for (let i=0; i<word.length;i++) {
        let character = word.charAt(i);
        if (arr[character]) {
           arr[character]++;
        } else {
           arr[character] = 1;
        }
    }

    return arr;

}


// Do not edit this line;
module.exports = frequencyCounter;