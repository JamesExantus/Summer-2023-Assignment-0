function countOfAllBooleans(arr) {
  // Insert code here;
  let j = -1;
  for(let i = 0; i<arr.length; i++){
    console.log(arr[i]);
    
    if(arr[i]==true|| arr[i]==false){
      j++;
    }
    
  }
  return j;
}

// Do not edit this line;
module.exports = countOfAllBooleans;