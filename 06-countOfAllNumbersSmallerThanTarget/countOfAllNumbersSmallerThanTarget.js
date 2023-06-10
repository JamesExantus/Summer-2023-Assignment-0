function countOfAllNumbersSmallerThanTarget(nums, target) {
  // Insert code here;
  let j =0;
  for(let i = 0; i<nums.length; i++)
  {
    if(nums[i] < target)
    j++;
  }

  return j;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;