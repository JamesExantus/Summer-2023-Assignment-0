function sumOfAllOddNumbers(nums) {
  // Insert code here;
  let j = 0;
  for(let i = 0; i <nums.length; i++){
    if(nums[i]% 2 != 0){
      j++;
    }
  }
  return j;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;