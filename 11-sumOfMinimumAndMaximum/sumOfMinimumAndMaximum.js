function sumOfMinimumAndMaximum(nums) {
  // Insert code here;let j = 0;
  let i = 0;
  let j = 0;
  let max = nums[i];
  let min = nums[i];
  for(i = 0; i <nums.length; i++){
    if(max >= nums[i]){
      max = nums[i];
    }
    if(min <= nums[i] ){
      min = nums[i];
    }

  }
  j = min + max;
  return j;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;