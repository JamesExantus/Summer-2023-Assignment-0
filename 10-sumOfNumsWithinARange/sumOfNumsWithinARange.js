function sumOfNumsWithinARange(nums, start, end) {
  // Insert code here;
  let j = 0;
  let k = 0;
  for(let i = 0; i <nums.length; i++){
    if(nums[i] >=start || nums[i]<= end){
      k = nums[i];
      j =nums[i] + j;
    }
  }
  return j;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;